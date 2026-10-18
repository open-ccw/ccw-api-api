import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { ReputationScoreLog } from "src/types/userData";

export const url =
  "https://community-web.ccw.site/students/reputation_score_log/page";

export type Req = {};

export type Res = PagesRes<ReputationScoreLog>;

/**
 * 获取学生信誉分增减记录
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 信誉分记录分页数据
 */
export async function getReputationScoreLog<T extends string>(
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {};
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
