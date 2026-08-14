import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/approval/update";

export type Req = {
  adorned: boolean;
  id: number;
};

export type Res = boolean;
/**
 * 更新勋章数据
 * @param adorned 是否佩戴
 * @param id 勋章id
 * @returns {Promise<Res<Tid, Tn>>} 勋章数据
 */
export async function updateApproval(
  id: number,
  adorned: boolean,
): Promise<Res> {
  const req: Req = {
    adorned,
    id,
  };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
