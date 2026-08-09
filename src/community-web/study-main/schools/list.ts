import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/study-main/schools/list";

export type Req = {};

export interface School {
  createdAt: number;
  districtCode: string;
  districtName: string;
  name: string;
  oid: string;
  updatedAt: number;
}

export type Res = School[];

/**
 * study-main/schools/list
 * 获取学校列表
 * @returns {Promise<Res>} 学校列表
 */
export async function getSchoolList(): Promise<Res> {
  return await request
    .post<ApiResponse<Res>>(url)
    .then((res) => res.data.body);
}
