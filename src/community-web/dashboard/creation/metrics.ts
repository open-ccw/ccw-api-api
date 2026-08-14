import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { DashboardTimePeriod } from "./overview";

export const url = "https://community-web.ccw.site/dashboard/creation/metrics";

export type Req = {
  timePeriod: DashboardTimePeriod;
  creationOid: MongoDBId;
};

export type DashboardMetricItem = {
  commentCount: number;
  createdAt: number;
  favoriteCount: number;
  income: number;
  playCount: number;
  playTime: number;
  shareCount: number;
};

export type Res = DashboardMetricItem[];

/**
 * 获取作品数据看板指标（按日）
 * @param {MongoDBId} creationOid 作品 ID
 * @param {DashboardTimePeriod} timePeriod 时间周期
 * @returns {Promise<Res>} 每日指标列表
 */
export async function getCreationDashboardMetrics(
  creationOid: MongoDBId,
  timePeriod: DashboardTimePeriod = "LAST_7_DAYS",
): Promise<Res> {
  const req: Req = { timePeriod, creationOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
