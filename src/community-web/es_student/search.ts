import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { SearchResult } from "src/types";

export const url = "https://community-web.ccw.site/es_student/search";

export type Req = {
  keyword: string;
};

export type Res = PagesRes<SearchResult.SearchStudent>;

/**
 * 搜索学生
 * @param {string} keyword 搜索关键词
 * @param {Partial<PageArgs<string>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 学生分页结果
 */
export async function searchStudents(
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
