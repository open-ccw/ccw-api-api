import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/short_url/decompress";

export type Req = {
  shortUrlCode: string;
};

export type Res = string;

/**
 * 解压缩短链接
 * @param {string} shortUrlCode 短链接
 * @returns {Promise<Res>} 原始URL
 */
export async function decompressShortUrl(shortUrlCode: string): Promise<Res> {
  const req: Req = { shortUrlCode };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
