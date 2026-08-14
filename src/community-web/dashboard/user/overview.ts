import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { DashboardTimePeriod } from "../creation/overview";

export const url = "https://community-web.ccw.site/dashboard/user/overview";

export type Req = {
  timePeriod: DashboardTimePeriod;
};

export type Res = {
  commentCount: number;
  commentCountGrowth: number;
  favoriteCount: number;
  favoriteCountGrowth: number;
  income: number;
  incomeGrowth: number;
  playCount: number;
  playCountGrowth: number;
  playTime: number;
  playTimeGrowth: number;
  shareCount: number;
  shareCountGrowth: number;
};

/**
 * 获取用户数据看板概览
 * @param {DashboardTimePeriod} timePeriod 时间周期
 * @returns {Promise<Res>} 用户数据概览
 */
export async function getUserDashboardOverview(
  timePeriod: DashboardTimePeriod = "LAST_7_DAYS",
): Promise<Res> {
  const req: Req = { timePeriod };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
