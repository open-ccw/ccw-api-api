import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { HashTag } from "src/types/hashTag";

export const url = "https://community-web.ccw.site/hash_tag/search/v2";

export type Req = {
  keyword: string;
};

export type Res = PagesRes<HashTag>;

/**
 * 搜索星球（话题）
 * @param {string} keyword 搜索关键词
 * @param {Partial<PageArgs<string>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 星球分页结果
 */
export async function searchHashTags(
  keyword: string,
  pageArgs_: Partial<PageArgs<string>> = {},
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { keyword };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
