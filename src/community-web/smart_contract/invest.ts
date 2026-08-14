import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/smart_contract/invest";

export type Req = {
  bucks: number;
  id: number;
};

export type Res = boolean;

/**
 * 向智能合约注资
 * @param {number} id 合约 ID
 * @param {number} bucks 投币数量
 * @returns {Promise<Res>} 注资是否成功
 */
export async function investSmartContract(
  id: number,
  bucks: number,
): Promise<Res> {
  const req: Req = { id, bucks };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
