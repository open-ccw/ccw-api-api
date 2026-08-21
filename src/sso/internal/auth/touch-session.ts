import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://sso.ccw.site/internal/auth/touch-session";

export type Req = {
  token?: string;
};

export type TouchSessionSuccess = {
  accountId: number;
  accountObjectId: MongoDBId;
  accountType: string;
  clientCode: string;
  createdAt: number;
  email: string | null;
  expireTime: number;
  extra: string; // JSON string
  id: number;
  lastAccessTime: number;
  orgId: string;
  scene: string | null;
  status: string;
  token: string;
  urlEncodedFullName: string | null;
};

export type Res = TouchSessionSuccess | null;

/**
 * 刷新/校验会话（内部接口）
 * 当 token 为空时后端会返回 token 不能为空 的错误；成功时返回会话信息。
 * @param {string} token 会话 token（可选）
 * @returns {Promise<Res>} 成功返回会话信息，失败会抛出错误
 */
export async function touchSession(token?: string): Promise<Res> {
  const query = token ? `?token=${encodeURIComponent(token)}` : "";
  return await request
    .get<ApiResponse<TouchSessionSuccess | null>>(`${url}${query}`)
    .then((res) => res.data.body);
}
