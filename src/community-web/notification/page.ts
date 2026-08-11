import { request } from "src/request";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { queryPage, DEFAULT_PAGE_ARGS } from "src/queryPages";
import { NotificationGroup, NotificationPage } from "src/types/notification";

export const url = "https://community-web.ccw.site/notification/page";

export type Req = {
  notifyGroup: NotificationGroup;
  page: number;
};

export type Res = PagesRes<NotificationPage>;

/**
 * 分页获取通知列表
 * @param {NotificationGroup} notifyGroup 通知分组
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 分页通知数据
 */
export async function getNotificationPage<T extends string>(
  notifyGroup: NotificationGroup = "COMMENT_TO_ME",
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = { ...DEFAULT_PAGE_ARGS, ...pageArgs_ };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    notifyGroup,
    page: pageArgs.page,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
