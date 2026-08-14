import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { Creation } from "src/types/creation";
import { SmartCoinContract } from "../list";

export const url =
  "https://community-web.ccw.site/smart_contract/earnings/page";

export type Req = {
  smartContractIds: number[];
};

export type EarningsItem = {
  creation: Creation;
  earnings: number;
  smartContract: SmartCoinContract;
  smartContractId: number;
};

export type Res = PagesRes<EarningsItem>;

/**
 * 分页查询当前用户智能合约收益
 * @param {number[]} smartContractIds 合约 ID 列表
 * @param {Partial<PageArgs<string>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 收益分页数据
 */
export async function getSmartContractEarningsPage(
  smartContractIds: number[],
  pageArgs_: Partial<PageArgs<string>> = {},
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { smartContractIds };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
