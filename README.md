# @ccw-api/api

CCW（创作社区）前后端接口 SDK，整合 `sso.ccw.site`、`community-web.ccw.site`、
`gandi-main.ccw.site`、`bfs-web.ccw.site`、`community-web-cloud-database.ccw.site`、
`op-parent-api.xiguacity.cn`
六大服务的常用 API，提供完整的 TypeScript 类型与开箱即用的分页封装。

- 包格式：**ESM + CJS + .d.ts 三产物**同时产出
- 类型：所有请求 / 响应字段**强类型**，后端 key 固定约束（如 `MongoDBId`、`CNameOssUrl`、`UUID`）
- 分页：统一返回 `PagesRes<T>`（含 `totalNum` / `totalPages` / `sortField` 等元信息）

---

## 安装

```bash
npm install @ccw-api/api
# 或
pnpm add @ccw-api/api
# 或
yarn add @ccw-api/api
```

> **零运行时依赖**：本包不内置 HTTP 请求库，需由用户通过 `setRequestUtils` 提供 request 实现以缩小体积。

---

## 快速开始

### 1. 初始化 Request（前置条件）

本包不内置 HTTP 请求库，需由用户提供 request 实现：

```ts
import { setRequestUtils } from "@ccw-api/api";

// 使用 axios 作为底层请求库
import axios from "axios";

setRequestUtils({
  async get(url) {
    const res = await axios.get(url);
    return { data: res.data };
  },
  async post(url, args) {
    const res = await axios.post(url, args);
    return { data: res.data };
  },
});
```

**RequestUtils 接口**：

```ts
interface RequestUtils {
  get<Res = any>(url: string | URL): Promise<{ data: Res }>;
  post<Res>(url: string | URL, args?: any): Promise<{ data: Res }>;
}
```

**完整示例（含 token 注入）**：

```ts
import { setRequestUtils } from "@ccw-api/api";
import axios from "axios";

const apiAxios = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

// 注入 token（推荐使用拦截器）
apiAxios.interceptors.request.use((config) => {
  // ....
});

setRequestUtils({
  async get(url) {
    const res = await apiAxios.get(String(url));
    return { data: res.data };
  },
  async post(url, args) {
    const res = await apiAxios.post(String(url), args);
    return { data: res.data };
  },
});
```

### 2. 调用方式

```ts
import {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
  opParentApi,
} from "@ccw-api/api"; // ✅ 推荐：具名导入
// 或
import api from "@ccw-api/api";
// ✅ default 导入：api.sso / api.communityWeb / api.gandiMain / api.bfsWeb / api.communityWebCloudDatabase / api.opParentApi
```

---

## 模块一：SSO（sso.ccw.site）

账号认证相关，共 **5 个 API**：

```ts
const {
  loginByPassword,
  logout,
  logoutBySession,
  loginByPhone,
  createSmsCaptcha,
} = sso;

// 账号密码登录
await loginByPassword("student_number", "xxxxx", {
  device: "WEB",
  browser: "Chrome",
});

// 登出当前 session
await logout();

// 强制某个 session 下线用于登陆设备管理
await logoutBySession(12345);

// 手机号+短信验证码登录（V3）
await loginByPhone("12345671145", "123456");

// 发送短信验证码（图形验证码可选，用于登录/注册场景）
await createSmsCaptcha("10011451919");
```

---

## 模块二：Community-Web（community-web.ccw.site）

覆盖作品 / 学生 / 星球 / 评论 / 通知 / 任务 / 表情 / 签到 / 云资产 / 学科专区 / 打赏 / 商城 / 商品 / 协作成员 / 智能合约 / 数据看板 / 搜索 等业务领域，共 **136 个 API**。
下面是常用场景示例。

### 学生与作品

```ts
// 拉取学生档案
const profile = await communityWeb.getStudentProfile(
  "63c2807d669fa967f17f5559",
);
//   ^? StudentOverview（包含头像、简介、统计字段等）

// 我的创作分
const score = await communityWeb.getCreatorScore();
console.log(score.rank); // "ORDINARY" | "HACKER" | "ADVANCED"

// 分页拉取某学生的作品列表（含 totalNum / totalPages）
const creations = await communityWeb.getCreationsByStudent(
  "63c2807d669fa967f17f5559",
  { page: 1, perPage: 12, sortField: "createdAt", sortType: "DESC" },
);
// creations: PagesRes<CreationSimple>
console.log(creations.totalNum, creations.data[0].title);
```

### 学生账号管理（绑定手机、修改密码）

```ts
// 绑定手机号（需要 token）
await communityWeb.bindStudentPhone(
  "13800138000", // 手机号
  "123456", // 短信验证码
  "86", // 国家代码
);

// 修改密码（需要 token + 短信验证码，无需旧密码）
// Step 1：先通过 session 发送短信验证码（手机号从登录 session 获取）
await communityWeb.createSmsCaptchaBySession("change_password");
// Step 2：用收到的验证码设置新密码
await communityWeb.changeStudentPassword("我的新密码123", "短信验证码");
```

### 星球（HashTag）与作品关联

```ts
// 查询某作品加入了哪些星球
const planets = await communityWeb.getPlanetsOfCreation(
  "69929185f8d6142487fd4b2e",
);
// planets: HashTagCreationRelation[]
// planets[0].rank  →  "ORDINARY"（星球审核等级，与创作分 CreatorScore.rank 概念不同）

// 查询我加入某星球的作品分页（排除一个星球 + 过滤状态）
const mine = await communityWeb.getMyHashTagCreations(
  "蔚蓝档案",
  ["PUBLISHED"],
  { page: 1, perPage: 8, sortField: "lastPassedAt", sortType: "DESC" },
);
```

### 通知（细化了 15 种 contentCategory）

```ts
import type {
  NotificationContent,
  PostCommentContent,
  FollowedContent,
} from "@ccw-api/api";

const page = await communityWeb.getNotificationPage("COMMENT_TO_ME", {
  page: 1,
  perPage: 20,
});
// page.data[].content  类型是 NotificationContent（判别联合）
// 用 contentCategory 做类型收窄：

for (const notif of page.data) {
  switch (notif.contentCategory) {
    case "POST_COMMENT": {
      const c = notif.content as PostCommentContent;
      console.log("评论者:", c.sender, "文章:", c.subject_outline);
      break;
    }
    case "FOLLOWED": {
      const c = notif.content as FollowedContent;
      console.log("新粉丝:", c.sender, c.sender_id);
      break;
    }
    case "CREATION_SHARE":
    case "SESSION_CREATED":
    case "COMMUNITY_ACTIVITY":
    case "POST_VISIBILITY_CHANGED":
    // ……共 15 种，可按 IDE 补全逐项处理
  }
}

// 拉取所有分组的未读统计
const stats = await communityWeb.getNotificationStats();
// stats.creationInteraction  stats.commentToMe  stats.followMe ……
```

### 任务、表情、金币、签到

```ts
// 我的任务列表
const tasks = await communityWeb.getMyTasks();

// 领取某个任务奖励
await communityWeb.acceptAward("61273ccf1730f4308e853f6a");

// 个人金币余额（充值 / 赠送 / 提现 三栏分离）
const coin = await communityWeb.getPersonalCurrencyAccount();
// coin: { internalCurrencyBalance, topUpCurrencyBalance, withdrawCurrencyBalance }

// 全部表情包 + 分页 + 分类
const [allEmoji, emojiPage, categories] = await Promise.all([
  communityWeb.getAllEmojis(),
  communityWeb.getEmojiPage("ENABLED", { page: 1, perPage: 50 }),
  communityWeb.getEmojiCategoryList(),
]);

// 签到
await communityWeb.insertCheckInRecord(); // 今日打卡
const history = await communityWeb.getCheckInRecords();

// 作品 / 评论 打赏（需要token，消耗账户金币）
// 给某个作品打赏 1 金币（objectType 默认 "CREATION"）
await communityWeb.donateTrade(1, "68ce4849811b737483bf7027", "CREATION");
```

### 黑名单、封禁、禁言查询

```ts
const STUDENT = "63c2807d669fa967f17f5559";

// 轻量：是否拉黑（只返回 NOT_BLOCKED / BLOCKING）
const s = await communityWeb.getStudentBlockStatus(STUDENT);

// 详细：完整的 BlockActionRecord（拉黑动作记录，oid / createdAt / fromEntityId）
const detail = await communityWeb.getStudentBlockRecordDetail(STUDENT);

// 封禁详情（带泛型，locked=false 时其他字段全为 null）
const locked = await communityWeb.getLockedUserDetail<true>(
  "642c0e8a59230841adf62406",
);

// 禁言详情（studentNumber 是 244373873 这种数字字符串，null 表示未禁言）
const muted = await communityWeb.getMutedUserDetail("244373873");
```

### 智能金币合约

```ts
// 列出作品中的智能金币合约
const contracts = await communityWeb.getSmartContractList(
  "6a3fa1ed159ed52f170c34d2",
);
// contracts: SmartCoinContract[]

// 查询合约账户余额
const account = await communityWeb.getSmartContractAccount(2022277721908162);
// account: { balance: 300 }

// 获取合约详情
const detail = await communityWeb.getSmartContractDetail(2022277721908162);
// detail: { accountId, bizId, rules, status, title, type, ... }

// 获取合约类型列表
const types = await communityWeb.getSmartContractTypeList();
// types: { title: "通用合约", type: "GENERAL" }[]

// 创建智能合约（需要 token）
const created = await communityWeb.createSmartContract(
  "6a7e8b8b91223874330c4d8f", // bizId
  "通用合约", // title
  "GENERAL", // type
);
// created: { accountId, bizId, id, title, type, ... }

// 执行合约（领取试玩奖励 / 玩家投币）
const result = await communityWeb.executeSmartContract(
  "6a3fa1ed159ed52f170c34d2", // bizId
  2022277721908162, // contract id
  378074, // rule id（award）
  1, // bucks
);
// result: { success: true }

// 向合约投币（需要 token）
const invested = await communityWeb.investSmartContract(
  2039166119812098, // contract id
  1, // bucks
);
// invested: boolean

// 分页查询合约收益
const earnings = await communityWeb.getSmartContractEarningsPage(
  [2039166119812098],
  { page: 1, perPage: 20 },
);
// earnings: PagesRes<{ creation, earnings, smartContract }>
```

### 连接社区扩展

```ts
// 查询是否关注了创作者
const following = await communityWeb.getConnectCommunityFollowingStatus(
  "6a3fa1ed159ed52f170c34d2", // 当前播放的作品 OID
  "651e3f7310b0530e7f80fe7a", // 目标用户 OID
);
// following: { avatar, isFollowing: boolean, name, oid }

// 查询用户对作品的点赞交互状态
const like = await communityWeb.getConnectCommunityCreationLikeStatus(
  "6a3fa1ed159ed52f170c34d2", // 当前播放的作品 OID
  "6a3fa1ed159ed52f170c34d2", // 目标作品 OID
);
// like: { interactionStatus: boolean, oid, title }

// 关注创作者（需要 token）
await communityWeb.followCreator("651e3f7310b0530e7f80fe7a");
// → "FOLLOWED"
```

### 商城商品 & 用户商店（头像框 / 表情 / 周边）

```ts
// ====== CCW 官方商城（商品分页查询） ======
// ProductCategory: 5=头像框, 7=周边商品, 10=表情
// ProductSource: "CCW_OFFICIAL"

// 查询周边商品分类的商城列表
const mallPage1 = await communityWeb.queryMallProductPage(
  7, // productCategory: 周边商品
  "CCW_OFFICIAL", // source
  { page: 1, perPage: 30, sortType: "DESC" },
);
// mallPage1: PagesRes<Product>
console.log(mallPage1.totalNum); // 293
console.log(mallPage1.data[0].name); // "运动好物|Star世达足球"
console.log(mallPage1.data[0].pointPrice); // 13299（金币价格）
console.log(mallPage1.data[0].stockNum); // 库存

// 查询头像框分类
const avatarFrames = await communityWeb.queryMallProductPage(
  5, // productCategory: 头像框
  "CCW_OFFICIAL",
  { page: 1, perPage: 8, sortType: "DESC" },
);
// avatarFrames.data[0].virtualValue → 头像框图片 URL

// 查询表情分类
const emojis = await communityWeb.queryMallProductPage(
  10, // productCategory: 表情
  "CCW_OFFICIAL",
);
// emojis.data[0].virtualValue → 表情包 ID（如 "13"）

// ====== 用户已拥有的商品（需要 token） ======
// 拉取用户拥有的头像框列表
const myProducts = await communityWeb.getUserProductsPage(
  5, // productCategory=5 头像框
  { page: 1, perPage: 8, sortType: "DESC", sortField: "" },
);
// myProducts: PagesRes<UserProduct>
// myProducts.data[0].status → 1=已佩戴, 0=未佩戴

// 切换商品佩戴状态（需要 token）
// 卸下头像框
await communityWeb.setUserProductStatus(false, 105847); // id, status=false
// 佩戴头像框
await communityWeb.setUserProductStatus(true, 105847);
```

### 协作成员邀请（作品团队协作）

```ts
const CREATION_OID = "68ce4849811b737483bf7027";

// 获取普通成员（MEMBER）邀请 token（需要 token）
const memberToken = await communityWeb.fetchMemberInviteToken(
  CREATION_OID,
  "MEMBER", // 或 "ADMIN"
);
// → 拼接成完整邀请链接：https://ccw.site/creation/.../join?token={memberToken}

// 获取观察者（OBSERVER）邀请 token（需要 token）
const observerToken = await communityWeb.fetchObserverInviteToken(CREATION_OID);

// 查询当前作品的协作成员列表（需要 token）
const members = await communityWeb.getTeamMemberList(CREATION_OID);

// 生成成员加入凭证（配合邀请链接，需要 token）
await communityWeb.produceTeamMemberTicket(CREATION_OID, memberToken);

// 查询协作日志分页（需要 token）
const logs = await communityWeb.getTeamworkLogPage(CREATION_OID, { page: 1 });
```

### 更换代表作

```ts
// 将指定作品设为个人代表作（需要 token，creationOid 必须是自己的作品）
await communityWeb.updateGreatCreation("68ce4849811b737483bf7027");
// → true 表示成功
```

### 数据看板

```ts
// ====== 作品看板 ======

// 作品数据概览（含环比增长）
const overview = await communityWeb.getCreationDashboardOverview(
  "69740f1a61b891733d5ee2c6",
  "LAST_7_DAYS",
);
// overview: { playCount, playCountGrowth, income, incomeGrowth, commentCount, ... }

// 作品按日指标
const metrics = await communityWeb.getCreationDashboardMetrics(
  "69740f1a61b891733d5ee2c6",
  "LAST_7_DAYS",
);
// metrics: { createdAt, playCount, playTime, income, commentCount, favoriteCount, shareCount }[]

// 作品播放分布
const dist = await communityWeb.getCreationDashboardMetricsDistribution(
  "69740f1a61b891733d5ee2c6",
  "LAST_7_DAYS",
);
// dist: { playCountDistribution: { category, value }[], playTimeDistribution: { category, value }[] }

// ====== 用户看板 ======

// 用户数据概览
const userOverview = await communityWeb.getUserDashboardOverview("LAST_7_DAYS");
// userOverview: { playCount, income, playTime, commentCount, ... }

// 用户按日指标
const userMetrics = await communityWeb.getUserDashboardMetrics("LAST_7_DAYS");
// userMetrics: DashboardMetricItem[]

// 用户指标明细（按作品拆分）
const detail = await communityWeb.getUserDashboardMetricsDetail(
  "PLAY_COUNT", // 指标类型: PLAY_COUNT | PLAY_TIME | INCOME | FAVORITE_COUNT | COMMENT_COUNT | SHARE_COUNT
  "LAST_7_DAYS",
);
// detail: { bizId, creation, proportion, value }[]
```

### 搜索

```ts
// 搜索学生（关键词匹配昵称，分页）
const students = await communityWeb.searchStudents("aaa", { page: 1 });
// students: PagesRes<SearchStudent>（含 approvalTagRelations、creations、followingStatus）

// 搜索星球/话题（关键词匹配 identifier，分页）
const tags = await communityWeb.searchHashTags("aaa", { page: 1 });
// tags: PagesRes<HashTag>（identifier 含 <em> 高亮，含 memberCount、favoritedStudentCount）

// 搜索帖子（关键词匹配标题/内容，分页）
const posts = await communityWeb.searchPosts("aaa", { page: 1 });
// posts: PagesRes<SearchPost>（含 author、featureImage、tags、rank）
```

---

## 模块三：Gandi-Main（gandi-main.ccw.site）

公告、服务器时间与作品排行榜相关，共 **5 个 API**：

```ts
const {
  getCurrentTimestamp,
  getBulletinsPage,
  getBulletinDetail,
  submitLeaderboardRecord,
  getLeaderboardRecords,
} = gandiMain;

// 服务端当前毫秒级时间戳（比客户端时间更可靠，可用于签到、排行榜等需要严格时间判断的场景）
const ts = await gandiMain.getCurrentTimestamp();

// 分页拉取公告列表（默认按 publishedAt 倒序，过滤已发布）
const bulletins = await gandiMain.getBulletinsPage("PUBLISHED", {
  page: 1,
  perPage: 10,
});
// bulletins.data[0].title / id / publishedAt

// 某条公告详情
const detail = await gandiMain.getBulletinDetail(123);

// ====== 作品排行榜 ======

// 获取排行榜记录（含榜单配置、当前用户排名、完整记录分页列表）
const board = await gandiMain.getLeaderboardRecords("65a2314daa96bd09b5beae5a");
console.log(board.title); // "总收益"
console.log(board.scoreUnit); // "币"
console.log(board.sortType); // "DESC"
console.log(board.leaderboardRecordTotalNum); // 834
console.log(board.curUserLeaderboardRecord?.ranking); // 139
console.log(board.leaderboardRecords[0].ranking); // 1
console.log(board.leaderboardRecords[0].score); // 排行榜最高分
console.log(board.leaderboardRecords[0].user?.nickname); // 榜首昵称

// 向排行榜提交分数记录（需要token：userOid必须对应当前登录用户）
await gandiMain.submitLeaderboardRecord(
  "65a2314daa96bd09b5beae5a", // 排行榜oid
  1500, // 分数
  "6a42413ccc79993c436d04b6", // 用户oid
  "", // 扩展信息（可选）
);
```

---

## 模块四：BFS-Web（bfs-web.ccw.site）

用户扩展（extension）管理与扩展打赏，共 **2 个 API**：

```ts
const { getUserExtensions, donateExtension } = bfsWeb;

// 分页查询某用户上传/使用过的扩展列表（默认按 updatedAt 倒序）
const exts = await bfsWeb.getUserExtensions("63c2807d669fa967f17f5559", {
  page: 1,
  perPage: 20,
});
// exts: PagesRes<Extension>

// 给某个扩展打赏（需要token，消耗账户金币）
await bfsWeb.donateExtension(
  "spineAnimation", // 扩展id（eid）
  5, // 打赏金币数量
);
```

---

## 模块五：Community-Web-Cloud-Database（community-web-cloud-database.ccw.site）

作品 / 用户的云变量（键值对存储）管理，共 **3 个 API**：

```ts
const {
  saveProjectCloudVariable,
  saveUserCloudVariable,
  getCloudVariableDetailV2,
} = communityWebCloudDatabase;

// 保存作品云变量（无需token，主键是作品id；value结构任意，泛型自动推导返回）
const saved1 = await communityWebCloudDatabase.saveProjectCloudVariable(
  "651c9a5142f8fb5ada70fad2",
  "backup_65d31eaeb2ce1b785ebea87b_云时间",
  { v: "2025-07-05T17:40:53.057+0800" },
);
// saved1: { v: string }
//   ^? 泛型自动匹配 value 传入的结构

// 保存用户云变量（需要token，主键内部自动为 userId 拼接 "-u" 后缀）
const saved2 = await communityWebCloudDatabase.saveUserCloudVariable(
  "68dddc63d28b025cb53fae25",
  "256053228",
  { key2: "0" },
);
// saved2: { key2: string }

// 查询云变量详情 V2
const detail = await communityWebCloudDatabase.getCloudVariableDetailV2(
  "6a3fa1ed159ed52f170c34d2", // accessKey
  "6a3fa1ed159ed52f170c34d2-u", // primaryKey
  "244373873", // secondaryKey
  ["4576y!!2"], // filterKeys
);
// detail: { ... } // 具体结构取决于存储的数据
```

---

## 模块六：OP-Parent-API（op-parent-api.xiguacity.cn）

家长端图形验证码服务，共 **2 个 API**：

```ts
const { createCaptcha, checkCaptcha } = opParentApi;

// 创建图形验证码（滑块拼图）
const captcha = await opParentApi.createCaptcha("BLOCK_PUZZLE");
// captcha: { data: { bgImg: string, jigsawImg: string }, token: string }

// 校验图形验证码（拼图滑块坐标）
const result = await opParentApi.checkCaptcha(captcha.token, 120, 5);
// result: { captchaExpired: boolean, errorMsg: string | null, success: boolean }
```

---

### 通用工具型 API

```ts
// 生成短链
await communityWeb.createShortUrl("https://ccw.site/detail/xxx");

// 还原短链（需要 token）
await communityWeb.decompressShortUrl("abc123");

// 生成邀请码（api/v1/short_code/encode）
await communityWeb.encodeShortCode("hello world", 1, 6);

// 服务器时间
await communityWeb.getTime();

// CCW 主服务状态（需要 token，返回服务运行状态）
await communityWeb.getCcwMainStatus();

// 埋点事件上报
await communityWeb.sendEvent("creation_detail_view_6880873d2211fa69e41c9d19");

// 通过登录 session 发送短信验证码（需要 token，用于重置密码，手机号从 session 获取）
await communityWeb.createSmsCaptchaBySession("change_password");
// → { batchId: "xxx", sendResult: 1 }（sendResult=1 表示成功）

// 广告横幅
await communityWeb.getLeafletsItemList(1001);

// 学科专区（分页 / 按频道）
await communityWeb.getSubjectAreaPage({ page: 1, perPage: 20 });
await communityWeb.getSubjectAreaPageByChannel("PRIMARY");

// 搜索热词
await communityWeb.getSearchHotWords();

// 创建作品（需要 token）
await communityWeb.createCreation("我的作品标题", "作品描述");
```

---

## 类型系统

### 原语类型（`types/api.d.ts`）

可直接从包顶层作为 `type` 导入：

```ts
import type {
  MongoDBId, // 24 位 hex 字符串（ObjectId）
  CNameOssUrl, // https://m.ccw.site/... 或 https://m.xiguacity.cn/... OSS URL
  UUID, // `${string}-${string}-${string}-${string}-${string}` 类型体操
  ApiResponse, // { code, msg, body: T } 后端统一响应壳（SDK 内部已拆）
} from "@ccw-api/api";
```

### 领域命名空间

每个 `types/*.d.ts` 作为一个命名空间重新导出，**避免同名类型冲突**（典型如 `Student` vs `StudentOverview` vs `Account.Types.Student`）：

```ts
import type {
  Api, // 原语类型（MongoDBId / CNameOssUrl / UUID / ApiResponse ...）
  UserData, // Student / StudentOverview / CreatorScore / UserCard ...
  Creation, // Creation / HashTag / HashTagCreationRank / CreationRelease ...
  Comment, // Comment / CommentStatus ...
  Notification, // Notification / NotificationSenderInfo / NotificationGroup ...
  NotificationContent, // 15 种通知 content 判别联合
  Pages, // PageArgs / PagesRes
  Session, // StudentSession / SessionArea
  Account, // AccountTypes
  Approval, // ApprovalTag
} from "@ccw-api/api";

type Score = UserData.CreatorScore["rank"]; // "ORDINARY" | "HACKER" | "ADVANCED"
type PlanetRank = Creation.HashTagCreationRank; // "ORDINARY"
```

---

## 分页约定

所有分页 API 都遵循同一套形状（详见 `types/pages.d.ts` + `src/queryPages.ts`）：

```ts
import type { PageArgs, PagesRes } from "@ccw-api/api";

// 入参 T extends string
// Partial<PageArgs<SortField|T>>，默认 { page:1, perPage:20, sortType:"DESC" }
// 出参 PagesRes<T> 完整结构：
const p: PagesRes<Creation.Creation> = {
  data: [], // 当前页数据
  page: 1,
  perPage: 20,
  offset: 0,
  totalNum: 1234, // 总条数 —— 之前版本被截断，目前 SDK 已完整透出
  totalPages: 62, // 总页数
  sortField: "createdAt",
  sortType: "DESC",
};
```

---

## 开发 & 发布

```bash
# 三产物构建（dist/ ESM + CJS + .d.ts）
npm run build

# 跑测试（node:test + tsx）
npm test                # 一次性全量

# 文档（TypeDoc，生成到 doc/ 或默认输出目录）
npm run doc
npm run doc:dev
```

`npm publish` 会自动触发 `prepublishOnly` → **build + test** 全跑一遍，失败会阻断发布。

---

## 目录与规范

所有 API 文件严格遵循 `AGENT.md` 规范：

- **按域名分组**：`src/sso` / `src/community-web` / `src/gandi-main` / `src/bfs-web` / `src/community-web-cloud-database` / `src/op-parent-api`，内部子目录对应 URL 路径
- **单文件单接口**：文件名 `kebab-case`，对应 endpoint 最后一段
- **7 段式模板**（每个 API 文件内部固定顺序）：
  1. `import`
  2. `export const url = "https://..."`（调试 & 测试直接引用）
  3. `export type Req = { ... }`
  4. `export type Res = { ... }`（响应体内部，不含 `ApiResponse` 外层）
  5. 辅助类型
  6. JSDoc（`@param` / `@returns`）
  7. `export async function xxx(): Promise<Res>`

新增 API 时，**最后记得在对应服务的 `index.ts`（如 `src/community-web/index.ts`、`src/gandi-main/index.ts` 等）里 `import + 对象字面量聚合导出`**，否则外部访问不到。
