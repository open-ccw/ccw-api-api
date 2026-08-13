import { request } from "src/request";
import { SearchResult } from "src/types";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/search/all";

export type Req = {
  keyword: string;
};

export type Res = {
  results: [
    SearchResult.SearchResultCreation,
    SearchResult.SearchResultStudent,
    SearchResult.SearchResultPost,
    SearchResult.SearchResultHashTag,
  ];
};

/**
 * 全局搜索
 * @param {string} keyword 搜索关键词
 * @returns {Promise<Res>} 搜索结果
 */
export async function searchAll(keyword: string): Promise<Res> {
  const req: Req = { keyword };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
