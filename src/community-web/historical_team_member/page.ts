import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://community-web.ccw.site/historical_team_member/page";

export type Req = {
  creationOid: MongoDBId;
  page: number;
  perPage: number;
};

export type Res = PagesRes<Record<string, never>>;

/**
 * 获取历史团队成员分页
 * 不知道怎么用
 * @param {MongoDBId} creationOid 作品id
 * @param {Partial<PageArgs<string | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 历史团队成员分页列表
 */
export async function getHistoricalTeamMember<T extends string>(
  creationOid: MongoDBId,
  pageArgs_: Partial<PageArgs<string | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    creationOid,
    page: pageArgs.page,
    perPage: pageArgs.perPage,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
