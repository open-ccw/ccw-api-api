import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { NotificationV3Group } from "./page";

export const url = "https://community-web.ccw.site/notification/v3/summary";

export type NotificationV3GroupSummary = {
  group: NotificationV3Group;
  /** 该组最新一条消息预览 */
  preview: null | {
    createdAt: string;
    id: MongoDBId;
    text: string;
  };
  unreadCount: number;
};

export type Req = {
  /** 是否附带各组最新一条消息预览 */
  includePreview?: boolean;
};

export type Res = {
  groups: NotificationV3GroupSummary[];
  /** 一键全部已读令牌 */
  markAll: null | string;
  totalUnread: number;
  /** 服务端当前可见时间戳 */
  visibleAt: string;
};

/**
 * 获取消息分组摘要（各组未读数与最新一条预览）
 * @param {boolean} [includePreview=true] 是否附带各组最新一条消息预览
 * @returns {Promise<Res>} 消息分组摘要
 */
export async function getNotificationV3Summary(
  includePreview: boolean = true,
): Promise<Res> {
  const req: Req = { includePreview };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
