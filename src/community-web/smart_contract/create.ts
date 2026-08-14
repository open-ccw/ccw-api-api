import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { SmartContractBizType } from "./list";
import { SmartContractType } from "./type/list";

export const url = "https://community-web.ccw.site/smart_contract/create";

export type Req = {
  bizType: SmartContractBizType;
  bizId: MongoDBId;
  title: string;
  type: SmartContractType;
};

export type Res = {
  accountId: MongoDBId;
  bizId: MongoDBId;
  bizType: SmartContractBizType;
  createdAt: null | number;
  id: number;
  status: null | string;
  title: string;
  type: SmartContractType;
  updatedAt: null | number;
};

/**
 * 创建智能合约
 * @param {MongoDBId} bizId 业务 ID（如作品 OID）
 * @param {string} title 合约标题
 * @param {SmartContractType} type 合约类型
 * @param {SmartContractBizType} bizType 业务类型，CREATION
 * @returns {Promise<Res>} 创建的智能合约信息
 */
export async function createSmartContract(
  bizId: MongoDBId,
  title: string,
  type: SmartContractType,
  bizType: SmartContractBizType = "CREATION",
): Promise<Res> {
  const req: Req = { bizType, bizId, title, type };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
