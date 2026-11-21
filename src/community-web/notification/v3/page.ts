import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import {
  NotificationExtensionInfo,
  NotificationSenderInfo,
} from "src/types/notification";
import { Creation } from "src/types/creation";
import AssetMarketInfo from "src/types/notification/asset_info";

export const url = "https://community-web.ccw.site/notification/v3/page";

/** 消息分组 */
export type NotificationV3Group =
  "COMMUNITY" | "CONTENT_INTERACTION" | "FRIEND_SHARE" | "REPLY" | "SYSTEM";

/** 组内过滤条件（观察值，可能随分组扩展） */
export type NotificationV3Filter = "ALL" | "FAVORITE" | "LIKE";

/** 内容分类（真实环境全量扫描观察值，可能继续增加） */
export type NotificationV3ContentCategory =
  | "ASSET_MARKET_DONATE"
  | "ASSET_MARKET_LIKED"
  | "ASSET_MARKET_PURCHASED"
  | "ASSET_MARKET_SHARED"
  | "COMMENT_DELETED"
  | "COMMUNITY_ACTIVITY"
  | "CREATION_AUDIT_PASSED"
  | "CREATION_BANNED"
  | "CREATION_CHECKED"
  | "CREATION_COMMENT_REPLIED"
  | "CREATION_COMMENTED"
  | "CREATION_FAVORITE"
  | "CREATION_LIKED"
  | "CREATION_RECOMMENDED_AS_POTENTIAL"
  | "CREATION_REMIXED"
  | "CREATION_SHARE"
  | "EXTENSION_COMMENT_REPLIED"
  | "EXTENSION_COMMENTED"
  | "EXTENSION_LIKED"
  | "FOLLOWED"
  | "FRIEND_INVITE"
  | "HASH_TAG_COMMENT_REPLIED"
  | "POST_COMMENT"
  | "POST_FAVORITE"
  | "POST_LIKED"
  | "POST_RATED_AS_EXCELLENT"
  | "POST_VISIBILITY_CHANGED"
  | "PROFILE_LEAVE_WORDS"
  | "SESSION_CREATED"
  | "TEAM_COMMENTED"
  | "USER_RECOMMEND"
  /** 旧 v2 存在但未在样本中观察到 */
  | "REPORT_LOG_REJECTED";

/** 消息正文（键随 contentCategory 变化） */
export type NotificationV3Content = {
  avatar?: CNameOssUrl;
  /** 系统消息/评论内容 */
  comments?: string;
  homework_id?: MongoDBId;
  homework_title?: string;
  like_icon?: null | string;
  message?: string;
  sender?: string;
  sender_id?: MongoDBId;
  slug?: string;
  student_id?: string;
  subject_oid?: null | MongoDBId;
  subject_outline?: string;
  subject_type?: string;
};

/** 消息附带的作品信息 */
export type NotificationV3CreationInfo = Pick<
  Creation,
  | "commentCount"
  | "creationRelease"
  | "favoriteCount"
  | "latestCoverLink"
  | "likeCount"
  | "oid"
  | "remixedCount"
  | "title"
  | "viewCount"
>;

/** 跳转目标 */
export type NotificationV3Target = {
  type: "NONE" | "URL";
  url?: string;
};

/** v3 统一消息条目 */
export type NotificationV3Item = {
  actions: { reply: boolean; report: boolean };
  /** ASSET_MARKET_* 类别时非空 */
  assetMarketInfo: AssetMarketInfo | null;
  avatar: CNameOssUrl;
  comment: null | string;
  commentType: null;
  content: NotificationV3Content | null;
  contentCategory: NotificationV3ContentCategory;
  createdAt: string;
  /** EXTENSION_* 类别时非空 */
  extensionInfo: null | NotificationExtensionInfo;
  followInfo: null | { followingStatus: string };
  group: NotificationV3Group;
  id: MongoDBId;
  likeIcon: null | CNameOssUrl;
  message: null | string;
  messageType: null;
  readState: "READ" | "UNREAD";
  senderInfo: null | NotificationSenderInfo;
  senderName: null | string;
  senderOid: null | MongoDBId;
  /** PROFILE_LEAVE_WORDS、EXTENSION_COMMENTED 等时为 "STUDENT" */
  senderType: "STUDENT" | null;
  /** USER_RECOMMEND 类别时非空：推荐的学生卡片 */
  studentInfo: null | {
    avatar: CNameOssUrl;
    bio: string;
    creationCount: number;
    followerCount: number;
    followingStatus: null | string;
    name: string;
    oid: MongoDBId;
  };
  subjectOid: null | MongoDBId;
  subjectOutline: null | string;
  subjectType: string;
  target: NotificationV3Target;
  title: null | string;
  /** 旧版通知 id（如被踢下线的会话 id） */
  triggeredById: null | string;
  url: null | string;
};

export type Req = {
  cursor: null | string;
  filter: NotificationV3Filter;
  group: NotificationV3Group;
  pageSize: number;
};

export type Res = {
  filter: NotificationV3Filter;
  group: NotificationV3Group;
  hasMore: boolean;
  items: NotificationV3Item[];
  /** 下一页游标，hasMore 为 false 时可能仍返回旧值，翻页前必须判断 hasMore */
  nextCursor: null | string;
  /** 用于标记已读的令牌 */
  readToken: string;
  /** 已读令牌有效期起点 */
  readTokenExpiresAt: string;
  visibleAt: string;
};

/**
 * 分页获取消息（v3 消息中心，游标翻页）
 * @param {NotificationV3Group} group 消息分组
 * @param {NotificationV3Filter} [filter="ALL"] 组内过滤条件
 * @param {null | string} [cursor=null] 上一页返回的 nextCursor
 * @param {number} [pageSize=20] 每页条数（SYSTEM 分组上限 20，传大会报 "size must be between 0 and 20"）
 * @returns {Promise<Res>} 消息分页数据
 */
export async function getNotificationV3Page(
  group: NotificationV3Group,
  filter: NotificationV3Filter = "ALL",
  cursor: null | string = null,
  pageSize: number = 20,
): Promise<Res> {
  const req: Req = { group, filter, cursor, pageSize };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
