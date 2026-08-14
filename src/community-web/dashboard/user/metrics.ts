import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { DashboardTimePeriod } from "../creation/overview";
import { DashboardMetricItem } from "../creation/metrics";

export const url = "https://community-web.ccw.site/dashboard/user/metrics";

export type Req = {
  timePeriod: DashboardTimePeriod;
};

export type Res = DashboardMetricItem[];

/**
 * 获取用户数据看板指标（按日）
 * @param {DashboardTimePeriod} timePeriod 时间周期
 * @returns {Promise<Res>} 每日指标列表
 */
export async function getUserDashboardMetrics(
  timePeriod: DashboardTimePeriod = "LAST_7_DAYS",
): Promise<Res> {
  const req: Req = { timePeriod };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
