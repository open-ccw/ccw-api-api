import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { CreationRelease } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation_release/page";

export type SortField = "submittedAt";

export type Req = {
  creationOid: MongoDBId;
};

export type Res = PagesRes<CreationRelease>;

/**
 * 获取作品发布记录分页
 * @param {MongoDBId} creationOid 作品id
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 发布记录分页列表
 */
export async function getCreationRelease<T extends string>(
  creationOid: MongoDBId,
  pageArgs_: Partial<PageArgs<SortField | T>> = {
    sortField: "submittedAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    creationOid,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
