import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { CreationScreenshot } from "src/types/creation";

export const url = "https://community-web.ccw.site/creation_screenshot/page";

export type Req = {
  subjectOid: MongoDBId;
};
export type Res = PagesRes<CreationScreenshot>;

/**
 * 获取作品截图分页
 * @param {MongoDBId} subjectOid 作品id
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 分页截图列表
 */
export async function getCreationScreenshot<T extends string>(
  subjectOid: MongoDBId,
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {},
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { subjectOid };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
