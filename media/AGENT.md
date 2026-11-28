# API 编写规范

## 沟通风格（Use Skill: caveman）

默认启用 caveman 压缩沟通模式，等级 `full`，用户可用 `/caveman lite|full|ultra|wenyan-*|off` 切换。核心要求：

### 压缩规则

- 删除：冠词（a/an/the）、填充词（just/really/basically/actually/simply）、客套话（sure/of course/happy to）、模糊限定
- 句子片段可用；用短同义词（big 不用 extensive，fix 不用 "implement a solution for"）
- 禁止工具调用旁白：调用前不写铺垫/计划/进度，调用后直接下一步或给结论
- 禁止装饰性表格和 emoji；不倾倒原始错误日志，只引用最短的关键行
- 通用技术缩写可用（DB/API/HTTP）；禁止自造缩写（cfg/impl/req/res/fn）— tokenizer 不省 token，还增加解码成本
- 禁止因果箭头（→）；代码块原样保留；错误信息精确引用

### 红线

- 永不删除改变语义的词：not / never / no / only / except
- 数字、单位必须精确
- 压缩只做减法：不为伪装穴居人语气而加词；若穴居人表达不比平铺表达短，用平铺表达

### 清晰度（混入 ASD-STE100 简明技术英语）

- 一句一个意思，目标 ≤20 词，主动语态
- 同一事物始终用同一个词，不换同义词轮转
- 指令用祈使句："Run X"，不是 "X should be run"
- caveman 与清晰度冲突时，清晰度优先

### Auto-Clarity（临时退出 caveman）

以下场景必须恢复正常表达，说完再回到 caveman：

- 安全警告
- 不可逆操作确认（如删库、强删分支）
- 多步骤序列中省略连接词会引发误读时
- 压缩本身会造成技术歧义时
- 用户要求澄清或重复提问时

### 边界

- 代码、注释、commit message、文档、issue/PR 描述、记忆文件一律写正常行文， caveman 只作用于对话回复
- "stop caveman" 或 "normal mode" 恢复正常模式
- 回复语言跟随用户语言；技术术语、代码、API 名、CLI 命令、错误字符串保持原文

## 目录结构

API 文件应按照后端服务域名进行分组，文件路径与 API URL 路径保持一致。

```
src/
├── sso/                          # sso.ccw.site 服务
│   └── index.ts                  # 导出该服务的所有 API
├── community-web/                # community-web.ccw.site 服务
│   └── index.ts
├── gandi-main/                   # gandi-main.ccw.site 服务
│   └── index.ts
├── bfs-web/                      # bfs-web.ccw.site 服务
│   └── index.ts
├── community-web-cloud-database/ # community-web-cloud-database.ccw.site 服务
│   └── index.ts
├── op-parent-api/                # op-parent-api.xiguacity.cn 服务
│   └── index.ts
├── index.ts                      # 根导出
└── types/                        # 公共类型定义
```

## 文件命名规范

- 使用 `kebab-case`（短横线分隔）命名文件
- 文件名应为 API endpoint名称，如 `login-by-password.ts`、`create-short-url.ts`
- 测试文件命名为 `${功能}.test.ts`，放置在同一目录下

## 代码结构规范

每个 API 文件应遵循以下顺序：

```typescript
// 1. 导入依赖
import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

// 2. 导出 URL（用于调试和测试）
export const url = "https://domain.ccw.site/path/to/api";

// 3. 请求类型定义 优先寻找已在types中定义的类型,oid studentId等key的类型固定为MongoDBId
export type Req = {
  field1: string;
  field2: number;
};

// 4. 响应类型定义
export type Res<T = any> = {
  data: T;
};

// 5. 辅助类型或接口（如需要）
export type ExtraInfo = {
  detail: string;
};

// 6. JSDoc 注释
/**
 * API 功能描述
 * @param {string} param1 参数1说明
 * @param {number} param2 参数2说明
 * @returns {Promise<Res>} 返回值说明
 */

// 7. 导出函数
export async function apiFunctionName(
  param1: string,
  param2: number,
): Promise<Res> {
  const req: Req = { field1: param1, field2: param2 };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
```

## 类型定义规范

### 通用类型

项目提供以下公共类型，应优先使用：

- `ApiResponse<T>` - 统一响应格式
- `MongoDBId` - MongoDB ObjectID 类型
- `CachedOssUrl` - OSS 缓存 URL 类型
- `HexSecTimeStamp` - 十六进制秒级时间戳

### 请求类型

- 使用 `Req` 命名请求参数类型
- 定义所有必填字段和可选字段
- 使用字面量类型限制枚举值，如 `clientCode: "STUDY_COMMUNITY"`

### 响应类型

- 使用 `Res` 命名响应类型
- 支持泛型参数以适应不同响应结构，如 `Res<Extra = string>`
- 直接定义响应体结构，无需嵌套 `body`（由 `ApiResponse` 包装）

## 函数编写规范

### 参数处理

- 函数参数应清晰命名，避免使用缩写
- 将复杂对象参数拆分为多个简单参数，提高可读性
- 提供合理的默认值，如 `reqExtra: ReqExtra = { device: "Node", browser: "Node.js" }`

### 请求封装

- 使用 `request` 发送请求（来自 `src/request`）
- 将请求体封装为 `Req` 类型变量后再发送
- 使用 `satisfies Req` 确保请求体类型正确

### 响应处理

- 使用 `ApiResponse<T>` 包装响应类型
- 通过 `.then((res) => res.data.body)` 直接返回响应体
- 对于需要特殊处理的响应数据（如 JSON 解析），在函数内部完成

## 导入规范

### 统一导入方式

```typescript
// 正确 - 使用项目路径导入
import { request } from "src/request";

// 错误 - 相对路径不一致或太长
import { request } from "../../../request";
```

### 类型导入

```typescript
// 正确 - 使用项目路径别名
import { ApiResponse, MongoDBId } from "src/types/api";
import { queryPage } from "src/queryPages";

// 错误 - 相对路径不一致或太长
import { ApiResponse } from "../../../types";
```

## 注释规范

### JSDoc 注释

所有导出函数必须添加 JSDoc 注释：

```typescript
/**
 * 通过密码登录
 * @param {string} loginKey 用户名
 * @param {string} password 密码
 * @param {ReqExtra} reqExtra 设备和浏览器信息（可选）
 * @returns {Promise<Res<Extra>>} 登录结果
 */
export async function loginByPassword(
  loginKey: string,
  password: string,
  reqExtra?: ReqExtra,
): Promise<Res<Extra>> {
  // ...
}
```

### 类型注释

对于复杂类型，添加适当的注释说明：
如果该属性可能为url,请立即询问开发者

```typescript
export type ApprovalStatus<Tid extends number, Tn extends string> = {
  /**
   * 有时会包含tag的名称，如"Gandi开发者"
   */
  iconLink: CachedOssUrl;
  /**
   * 浮于iconLink之上的icon
   */
  mediumImage: CachedOssUrl;
};
```

## 测试规范

### 测试框架

- 使用 Node.js 内置 `node:test` + `tsx`（TypeScript execute）运行测试
- 断言使用 Node.js 内置 `node:assert/strict`
- 测试运行命令：`npm test`（`tsx --import ./src/before_test.ts --test`）
- `before_test.ts` 在测试前执行，可用于动态修改 `request` 的行为

### 测试文件位置

测试文件与 API 文件放在同一目录下，命名为 `${功能}.test.ts`。

### 测试导入规范

从 `src/testUtils` 统一导入测试工具：

```typescript
import {
  test, // node:test 的 test 函数别名
  beforeAll, // node:test 的 before 函数别名
  testAuthReadApi, // 读操作鉴权测试辅助
  testAuthWriteApi, // 写操作鉴权测试辅助
  expectKeys, // 对象 key 断言
  expectType, // 类型断言
  hasKeyPath, // 嵌套 key 路径检测
  getKeyPath, // 获取嵌套属性值
  hasRealToken, // 是否存在真实 token
} from "src/testUtils";
import assert from "node:assert/strict";
```

### 测试辅助函数 `testAuthReadApi` / `testAuthWriteApi`

**核心逻辑（先尝试运行 API，再判断错误原因）**：

1. 始终先调用 `apiCall()` 发送真实请求
2. 请求成功 → 执行 `validateShape` 验证返回值形状
3. 请求失败 → 提取错误消息，按以下分支处理：
   - **是 token 缺失错误**（`token为空` / `token不能为空` / `4001082401` / `User not logged in`）：
     - 有真实 token（`hasRealToken() === true`）→ 断言失败（不该出现鉴权错误）
     - 无真实 token → 如指定了 `rejectMessage` 则匹配错误消息，否则视为预期通过
   - **不是 token 缺失错误**：
     - 如指定了 `rejectMessage` → 用正则匹配错误消息，匹配通过，不匹配断言失败
     - 未指定 `rejectMessage` 且有真实 token → 重新抛出错误（非预期失败）
     - 未指定 `rejectMessage` 且无真实 token → 视为预期内异常，测试通过

```typescript
// 读操作示例：需要鉴权 + 返回值形状校验
test("get student profile", async () => {
  await testAuthReadApi(() => getStudentProfile("63c2807d669fa967f17f5559"), {
    rejectMessage: "token为空", // 可选：无 token 时期望的错误消息
    validateShape: (res) => {
      expectKeys(res, ["oid", "nickname", "avatar"]);
      expectType(res.oid, "string");
    },
  });
});

// 写操作示例：需要鉴权 + 返回值非空校验
test("insert check in record", async () => {
  await testAuthWriteApi(() => insertCheckInRecord(), {});
});

// 写操作示例：需要鉴权 + 自定义形状校验
test("save user cloud variable", async () => {
  await testAuthWriteApi(
    () => saveUserCloudVariable("bizId", "secKey", { foo: "bar" }),
    {
      validateShape: (res) => {
        assert.strictEqual(res.foo, "bar");
      },
    },
  );
});
```

### 测试内容

测试应覆盖：

- 正常流程返回值验证
- 异常情况错误信息验证
- 参数边界情况

**重要**：

- 如果 API 不需要 token 也能使用，测试应验证返回值的形状/类型，而不是期望抛出 token 相关异常
- 仅当 API 确实需要鉴权时，才使用 "should fail without token" 类测试
- Logout API 测试在有真实 token 时应跳过，避免失效服务端 session

```typescript
import { getApprovalTags } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("test approval list", async () => {
  const tags = await getApprovalTags("63c2807d669fa967f17f5559");
  const tag = tags.find((v) => v.approvalTagId === 235);
  assert.ok(tag !== undefined);
  assert.strictEqual(tag.approvalTagName, "Gandi 开发者");
});
```

## 导出规范

### 服务入口导出

每个服务目录（如 `sso/`、`community-web/`）应有 `index.ts`，统一导出该服务的所有 API：

```typescript
import { loginByPassword } from "./web/auth/login-by-password";
import { logout } from "./web/auth/logout";

export const sso = {
  loginByPassword,
  logout,
};
```

### 根导出

`src/index.ts` 导出所有服务和 `setRequestUtils`：

```typescript
import { sso } from "./sso";
import { communityWeb } from "./community-web";
import { gandiMain } from "./gandi-main";
import { bfsWeb } from "./bfs-web";
import { communityWebCloudDatabase } from "./community-web-cloud-database";
import { opParentApi } from "./op-parent-api";

export {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
  opParentApi,
};

export { setRequestUtils } from "./request";

export default {
  sso,
  communityWeb,
  gandiMain,
  bfsWeb,
  communityWebCloudDatabase,
  opParentApi,
};

export type * from "./types";
```

## 错误处理

- 使用 `request` 模块（由用户通过 `setRequestUtils` 注入）发送请求
- 测试时验证错误信息是否符合预期
- 不要在 API 函数中捕获错误，让调用方处理

## Request 模块

本包不内置 HTTP 请求库，采用依赖注入模式，由用户提供 request 实现以缩小体积。

### RequestUtils 接口

```typescript
interface RequestUtils {
  get<Res = any>(url: string | URL): Promise<{ data: Res }>;
  post<Res>(url: string | URL, args?: any): Promise<{ data: Res }>;
}
```

### 初始化方式

在应用入口处调用 `setRequestUtils` 注入 request 实现：

```typescript
import { setRequestUtils } from "@ccw-api/api";
import axios from "axios";

const apiAxios = axios.create({
  headers: { "Content-Type": "application/json" },
});

// 可选：添加 token 拦截器
apiAxios.interceptors.request.use((config) => {
  // ...
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

### 测试环境

测试时通过 `before_test.ts` 在测试前注入 mock request：

```typescript
// src/before_test.ts
// 无需你来修改
```

## 最佳实践

1. **URL 一致性**：`url` 常量应与实际 API 地址完全一致
2. **类型安全**：使用 TypeScript 泛型提供灵活的类型支持
3. **函数命名**：使用 `camelCase`，前缀描述操作（如 `get`, `create`, `login`）
4. **单一职责**：每个文件只包含一个 API 函数
5. **可测试性**：导出 `url` 常量便于测试和调试

### 分页请求

```typescript
import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

// 其他一般请求配置

export async function getDonatedRecordRanking(
  args: any, // 其他参数
  pageArgs_: Partial<PageArgs> = {},
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { ... }; // 构造请求
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
```
