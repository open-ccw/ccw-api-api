import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/study-main/external/ip/resolve";

export type Req = {};

export interface Res {
  area: string;
  city: string;
  country: string;
  isp: string;
  province: string;
}

/**
 * study-main/external/ip/resolve
 * 解析当前IP的地理位置信息
 * @returns {Promise<Res>} IP地理信息
 */
export async function resolveExternalIp(): Promise<Res> {
  return await request
    .post<ApiResponse<Res>>(url)
    .then((res) => res.data.body);
}
