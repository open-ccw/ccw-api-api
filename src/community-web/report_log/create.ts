import { request } from "src/request";
import { ApiResponse } from "src/types/api";

export const url = "https://community-web.ccw.site/report_log/create";

export type ReportSubjectType = "COMMENT" | "CREATION" | string;

export type Req = {
  description?: string;
  evidence: Array<string>;
  reason: string;
  reportedSubjectOid: string;
  reportedSubjectType: ReportSubjectType;
  version?: string;
};

export type Res = boolean;

/**
 * 举报内容（评论/作品等）
 * @param {string} reason 上报理由，例如："引战"
 * @param {string} reportedSubjectOid 被上报对象的 id（可为数字或字符串形式）
 * @param {string[]} evidence 证据列表（如截图链接）
 * @param {ReportSubjectType} reportedSubjectType 被上报对象类型，示例："COMMENT"
 * @param {string} description 补充描述（可选）
 * @param {string} version 接口版本（可选）
 * @returns {Promise<Res>} 是否上报成功
 */
export async function createReportLog(
  reason: string,
  reportedSubjectOid: string,
  evidence: Array<string> = [],
  reportedSubjectType: ReportSubjectType = "COMMENT",
  description: string = "",
  version: string = "1.0",
): Promise<Res> {
  const req: Req = {
    reason,
    reportedSubjectOid,
    evidence,
    reportedSubjectType,
    description,
    version,
  };

  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
