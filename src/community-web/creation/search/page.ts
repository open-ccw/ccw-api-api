import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { CreationSimple } from "src/types/creation";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

export const url = "https://community-web.ccw.site/creation/search/page";
export type SortField = "createdAt" | "likeCount" | "viewCount";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  forEveryone?: boolean;
  keyword?: string;
  oids?: string[];
  tag?: string;
};
export type Res = PagesRes<CreationSimple>;

/**
 * 搜索作品
 * @param {string} req.tag 标签 例如:游戏 动画故事 角色扮演
 * @param {string[]} req.oids 作品id列表
 * @param {string} req.keyword 按作品名搜索
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 作品分页结果
 */
export async function searchCreationsByTag<T extends string>(
  req: Req,
  pageArgs_: Partial<PageArgs<SortField | T>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
