import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/feed/friend_invite";

export type Req = {
  message: string;
};

export type Res = boolean;

/**
 * 在动态分享邀请消息
 * @param {string} message 分享消息内容
 * @returns {Promise<Res>} true 表示分享成功
 */
export async function shareFriendInvite(message: string): Promise<Res> {
  const req: Req = { message };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
