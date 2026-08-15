import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { SearchResult } from "src/types";

export const url = "https://community-web.ccw.site/post/search";

export type Req = {
  keyword: string;
};

export type Res = PagesRes<SearchResult.SearchPost>;

/**
 * 搜索帖子
 * @param {string} keyword 搜索关键词
 * @param {Partial<PageArgs<string>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 帖子分页结果
 */
export async function searchPosts(
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
