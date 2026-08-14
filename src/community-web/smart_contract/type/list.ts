import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/smart_contract/type/list";

export type SmartContractType = "GENERAL" | "GENERAL_NO_SPLIT";

export type Req = {};

export type Res = {
  title: string;
  type: SmartContractType;
}[];

/**
 * 获取智能合约类型列表
 * @returns {Promise<Res>} 合约类型列表
 */
export async function getSmartContractTypeList(): Promise<Res> {
  const req: Req = {};
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
