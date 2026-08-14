import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { DashboardTimePeriod } from "../overview";

export const url =
  "https://community-web.ccw.site/dashboard/creation/metrics/distribution";

export type Req = {
  creationOid: MongoDBId;
  timePeriod: DashboardTimePeriod;
};

export type DistributionItem = {
  category: string;
  value: number;
};

export type Res = {
  playCountDistribution: DistributionItem[];
  playTimeDistribution: DistributionItem[];
};

/**
 * 获取作品数据看板指标分布
 * @param {MongoDBId} creationOid 作品 ID
 * @param {DashboardTimePeriod} timePeriod 时间周期
 * @returns {Promise<Res>} 播放次数与播放时长分布
 */
export async function getCreationDashboardMetricsDistribution(
  creationOid: MongoDBId,
  timePeriod: DashboardTimePeriod = "LAST_7_DAYS",
): Promise<Res> {
  const req: Req = { creationOid, timePeriod };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
