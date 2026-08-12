import { request } from "src/request";
import { AccountTypes } from "src/types/account";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/locked_user/detail";

export type Req = {
  accountOid: MongoDBId;
};

interface UserNotLocked {
  accountOid: null;
  accountType: null;
  createdAt: null;
  description: null;
  id: null;
  locked: false;
  operatorOid: null;
  unlocksAt: null;
  updatedAt: null;
}

interface UserLocked {
  accountOid: MongoDBId;
  accountType: AccountTypes;
  createdAt: number;
  description: string|null;
  id: number;
  locked: true;
  operatorOid: MongoDBId;
  unlocksAt: number;
  updatedAt: number;
}

export type LockedUserDetail = UserLocked | UserNotLocked;

export type Res = LockedUserDetail;

/**
 * 获取被封禁用户详情
 * @param {MongoDBId} accountOid 用户账户ID
 * @returns {Promise<Res>} 被封禁用户详情
 */
export async function getLockedUserDetail(
  accountOid: MongoDBId,
): Promise<Res> {
  const req: Req = { accountOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
