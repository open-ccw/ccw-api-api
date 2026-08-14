import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { Creation } from "src/types/creation";
import { DashboardTimePeriod } from "../../creation/overview";

export const url =
  "https://community-web.ccw.site/dashboard/user/metrics/detail";

export type DashboardMetricType =
  | "PLAY_COUNT"
  | "PLAY_TIME"
  | "INCOME"
  | "FAVORITE_COUNT"
  | "COMMENT_COUNT"
  | "SHARE_COUNT";

export type Req = {
  timePeriod: DashboardTimePeriod;
  type: DashboardMetricType;
};

export type Res = {
  bizId: MongoDBId;
  bizName: null | string;
  bizType: "CREATION";
  creation: Creation;
  proportion: number;
  value: number;
}[];

/**
 * 获取用户数据看板指标明细（按作品）
 * @param {DashboardMetricType} type 指标类型
 * @param {DashboardTimePeriod} timePeriod 时间周期
 * @returns {Promise<Res>} 作品指标明细列表
 */
export async function getUserDashboardMetricsDetail(
  type: DashboardMetricType,
  timePeriod: DashboardTimePeriod = "LAST_7_DAYS",
): Promise<Res> {
  const req: Req = { timePeriod, type };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
