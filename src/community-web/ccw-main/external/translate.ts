import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/ccw-main/external/mt/translate";

export type Req = {
  sourceLanguage?: string; // 'auto'
  targetLanguage: string; // e.g. 'es'
  sourceText: string;
};

export type Res = {
  translatedContent: string;
};

/**
 * 翻译文本
 * @param req 请求体
 * @returns Res
 */
export async function translate(req: Req): Promise<Res> {
  // 与仓库中其他接口保持一致的调用方式：request.post<ApiResponse<Res>>(url, req)
  const body = await request.post<ApiResponse<Res>>(url, req).then((res) => res.data.body);
  return body;
}
