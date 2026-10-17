import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url_ = "https://sso.ccw.site/oauth/authorize";

/**
 * 获取加密后的oauth code, 此接口存在盗号漏洞, 已被修改
 * @deprecated
 * @returns {Promise<string>}
 */
export async function oauthAuthorize(state: string): Promise<string> {
  const url = new URL(url_);
  url.searchParams.set("state", state);
  return await request
    .get<ApiResponse<string>>(url.toString())
    .then((res) => res.data.body);
}
