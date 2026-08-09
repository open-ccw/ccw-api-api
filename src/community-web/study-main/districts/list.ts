import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/study-main/districts/list";

export type Req = {};

export interface District {
  children: District[];
  label: string;
  level: number;
  value: number;
}

export type Res = District[];

/**
 * study-main/districts/list
 * 获取中国行政区划树形列表
 * @returns {Promise<Res>} 行政区划列表
 */
export async function getDistrictList(): Promise<Res> {
  return await request
    .post<ApiResponse<Res>>(url)
    .then((res) => res.data.body);
}
