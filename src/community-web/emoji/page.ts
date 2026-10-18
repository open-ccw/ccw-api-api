import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { queryPage, DEFAULT_PAGE_ARGS } from "src/queryPages";
import { Emoji } from "./all";

export const url = "https://community-web.ccw.site/emoji/page";

export type Req = {
  page: number;
  perPage: number;
  status: string;
};

export type Res = PagesRes<Emoji>;

export type EmojiStatus = "ENABLED" | "PUBLISHED";

/**
 * 分页获取表情包
 * @param {string} status 表情包状态
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 分页表情包数据
 */
export async function getEmoji<T extends string>(
  status: EmojiStatus = "ENABLED",
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = { ...DEFAULT_PAGE_ARGS, ...pageArgs_ };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    page: pageArgs.page,
    perPage: pageArgs.perPage,
    status,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
