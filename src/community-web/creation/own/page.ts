import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { CreationSimple, CreationStatus } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation/own/page";

export type SortField = "updatedAt" | "createdAt";

export type Req = {
  ignoreTypicalProject?: boolean;
  statuses?: CreationStatus[];
};

export type Res = PagesRes<CreationSimple>;

/**
 * 获取自己的作品分页列表
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @param {boolean} ignoreTypicalProject 是否忽略应用课编程文件项目
 * @param {ProjectStatus[]} statuses 作品状态过滤
 * @returns {Promise<Res>} 自己的作品分页列表
 */
export async function getOwnCreation<T extends string>(
  pageArgs_: Partial<PageArgs<SortField | T>> = {
    sortField: "updatedAt",
  },
  statuses: CreationStatus[] = ["BANNED", "PUBLISHED", "REJECTED", "SUBMITTED"],
  ignoreTypicalProject: boolean = false,
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    statuses,
    ignoreTypicalProject,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
