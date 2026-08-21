import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/comment/like_record/delete";

export type Req = {
  commentId: number;
};

export type Res = boolean;

/**
 * 取消点赞评论
 * @param {number} commentId 评论id
 * @returns {Promise<Res>} 操作是否成功
 */
export async function unlikeComment(commentId: number): Promise<Res> {
  const req: Req = { commentId };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
