import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { CreationSimple } from "src/types/creation";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";

export const url = "https://community-web.ccw.site/creation/page";
export type SortField =
  "createdAt" | "likeCount" | "viewCount" | "updatedAt" | "commentCount";
const dpa: PageArgs<SortField> = {
  ...DEFAULT_PAGE_ARGS,
  sortField: "createdAt",
};

export type Req = {
  remixCreationOids: MongoDBId[];
};
export type Res = PagesRes<CreationSimple>;

/**
 * 根据原作品id获取改编作品分页列表
 * @param {MongoDBId[]} originCreationOids 原作品id列表
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 改编作品分页结果
 */
export async function getRemixedCreation<T extends string>(
  originCreationOids: MongoDBId[],
  pageArgs_: Partial<PageArgs<SortField | T>> = {},
): Promise<Res> {
  const pageArgs = {
    ...dpa,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { remixCreationOids: originCreationOids };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
