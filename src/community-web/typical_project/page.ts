import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://community-web.ccw.site/typical_project/page";

export type TypicalProjectItem = {
  cover: string;
  createdAt: null | number;
  creationHints: null | string;
  creationInfo: null | string;
  defaultLinks: string[];
  defaultStars: string[];
  id: number;
  name: string;
  projectLink: string;
  status: string;
  templateType: string;
  updatedAt: null | number;
};

export type Req = {
  studentOid: MongoDBId;
  templateType: "APPLICATION";
};

export type Res = PagesRes<TypicalProjectItem>;

/**
 * 获取应用课工程文件项目分页列表 (https://www.ccw.site/workspace/application)
 * @param {MongoDBId} studentOid 学生id
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 应用课工程文件项目分页列表
 */
export async function getTypicalProject<T extends string>(
  studentOid: MongoDBId,
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    studentOid,
    templateType: "APPLICATION",
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
