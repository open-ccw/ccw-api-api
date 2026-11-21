import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { NotificationStats } from "src/types/notification";

export const url = "https://community-web.ccw.site/notification/stats/v2";

export type Req = {
  countAll: boolean;
};

export type Res = NotificationStats;

/**
 * 获取通知统计
 * @deprecated 已被 notification/v3 取代，使用 getNotificationV3Summary
 * @param {boolean} countAll 是否统计全部
 * @returns {Promise<Res>} 通知统计数据
 */
export async function getNotificationStats(
  countAll: boolean = true,
): Promise<Res> {
  const req: Req = { countAll };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
