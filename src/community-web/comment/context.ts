import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import {
  Comment,
  SectionType,
  SubjectType,
  TopicInfo,
} from "src/types/comment";
import { OtherUser } from "src/types/userData";

export const url = "https://community-web.ccw.site/comment/context";

export type ContextCommenter = OtherUser & {
  approvedContent: null | string;
  approvedType: null | string;
};

export type ContextComment = Omit<Comment, "commenter" | "topic"> & {
  commenter: ContextCommenter;
  topic: TopicInfo | null;
};

/** 锚点评论的定位信息 */
export type CommentContextAnchor = {
  commentId: number;
  /** 锚点评论所在顶层楼层 id */
  floorId: number;
  /** 锚点所在楼层在本次窗口中的下标 */
  floorIndex: number;
  floorVisible: boolean;
  /** 锚点是否为回复（楼中楼） */
  reply: boolean;
  sectionType: SectionType;
  status: "FOLDED" | "PUBLISHED";
};

/** 楼层游标，用于向上/向下翻页 */
export type ContextCursor = {
  next: null | string;
  prev: null | string;
};

export type Req = {
  commentId: number;
  floorWindowSize: number;
  replyWindowSize: number;
  sectionType: SectionType;
  subjectOid: string;
  subjectType: SubjectType;
};

export type Res = {
  /** 锚点评论的定位信息 */
  anchor: CommentContextAnchor;
  /** 楼层游标 */
  floorCursor: ContextCursor;
  /** 以锚点所在楼层为中心的楼层窗口 */
  floors: ContextComment[];
  /** 锚点为回复时，其所在楼层的回复窗口；锚点为顶层评论时也有值 */
  replies: {
    cursor: ContextCursor;
    /** 锚点回复在其楼层回复列表中的下标 */
    replyIndex: number;
    /** 被回复的评论（即锚点回复的目标） */
    replyTo: ContextComment | null;
    replyToInWindow: boolean;
    total: number;
    window: ContextComment[];
  };
  subjectOid: string;
  subjectType: SubjectType;
  /** 顶层评论总数 */
  total: number;
  /** 评论不可用原因（如被删除），正常为 null */
  unavailableReason: null | string;
};

/**
 * 获取评论上下文（以某条评论为锚点，返回其所在楼层及回复窗口，用于定位跳转）
 * @param {string} subjectOid 主体 oid（作品/文章/用户主页等）
 * @param {SubjectType} subjectType 主体类型
 * @param {SectionType} sectionType 板块类型
 * @param {number} commentId 锚点评论 id
 * @param {number} [floorWindowSize=20] 楼层窗口大小
 * @param {number} [replyWindowSize=10] 回复窗口大小
 * @returns {Promise<Res>} 评论上下文
 */
export async function getCommentContext(
  subjectOid: string,
  subjectType: SubjectType,
  sectionType: SectionType,
  commentId: number,
  floorWindowSize: number = 20,
  replyWindowSize: number = 10,
): Promise<Res> {
  const req: Req = {
    subjectOid,
    subjectType,
    sectionType,
    commentId,
    floorWindowSize,
    replyWindowSize,
  };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
