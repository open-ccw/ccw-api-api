import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/dashboard/creation/overview";

export type DashboardTimePeriod =
  | "LAST_1_DAY"
  | "LAST_7_DAYS"
  | "LAST_30_DAYS"
  | "LAST_90_DAYS";

export type Req = {
  timePeriod: DashboardTimePeriod;
  creationOid: MongoDBId;
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
 * 获取作品数据看板概览
 * @param {MongoDBId} creationOid 作品 ID
 * @param {DashboardTimePeriod} timePeriod 时间周期
 * @returns {Promise<Res>} 作品数据概览
 */
export async function getCreationDashboardOverview(
  creationOid: MongoDBId,
  timePeriod: DashboardTimePeriod = "LAST_7_DAYS",
): Promise<Res> {
  const req: Req = { timePeriod, creationOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
