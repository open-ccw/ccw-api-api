import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { LoginSession } from "src/types/session";

export const url_ = "https://sso.ccw.site/oauth/token";

export type Res<Extra = string> = LoginSession<Extra, string>;
export type Extra = {
  browser: string;
  device: string;
  ip: string;
  loginParentOid: MongoDBId;
  loginType: "BY_CCW_OAUTH";
  orgId: "";
};

/**
 * 获取oauth token, 此接口存在盗号漏洞, 已被修改
 * @deprecated
 * @returns {Promise<string>}
 */
export async function getOauthToken(code: string): Promise<Res<Extra>> {
  const { extra: extra_, ...rest } = await request
    .post<ApiResponse<Res>>("https://sso.ccw.site/oauth/token", { code })
    .then((res) => res.data.body);
  const extra: Extra = JSON.parse(extra_);
  return {
    extra,
    ...rest,
  };
}
