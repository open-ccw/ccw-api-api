import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { NotificationV3Group } from "./page";

export const url = "https://community-web.ccw.site/notification/v3/mark_read";

/** 标记已读的分组，"ALL" 表示全部分组 */
export type NotificationV3MarkReadGroup = "ALL" | NotificationV3Group;

export type Req = {
  group: NotificationV3MarkReadGroup;
  /** 来自 getNotificationV3Page 或 getNotificationV3Summary 的令牌 */
  readToken: string;
};

export type Res = {
  /** 需要重试的等待毫秒数，0 表示无需重试 */
  retryAfterMs: number;
  /** 本次标记为已读的消息数 */
  changedCount: number;
  /** 分组摘要是否需要刷新 */
  summaryInvalidated: boolean;
  /** 是否全部完成 */
  completed: boolean;
};

/**
 * 标记 v3 消息为已读
 * @param {NotificationV3MarkReadGroup} group 消息分组，"ALL" 表示全部
 * @param {string} readToken 已读令牌
 * @returns {Promise<Res>} 标记结果
 */
export async function markNotificationV3Read(
  group: NotificationV3MarkReadGroup,
  readToken: string,
): Promise<Res> {
  const req: Req = { group, readToken };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
