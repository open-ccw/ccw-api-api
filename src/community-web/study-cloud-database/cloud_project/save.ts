import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-cloud-database/cloud_project/save";

export type CloudProjectMeta = {
  agent?: string;
  platform?: {
    name?: string;
    url?: string;
  };
  semver?: string;
  vm?: string;
};

export type Req = {
  creationOid: MongoDBId;
  extensions?: string[];
  lastModified: number;
  meta?: CloudProjectMeta;
  monitors?: Record<string, any>;
  targets: Record<string, any>;
};

export type Res = boolean;

/**
 * 保存云项目
 * @param {MongoDBId} creationOid 作品 oid
 * @param {number} lastModified 最后更新时间（毫秒）
 * @param {Record<string, unknown>} targets 项目目标对象
 * @param {CloudProjectMeta} meta 项目元信息（可选）
 * @param {Record<string, unknown>} monitors 监控对象（可选）
 * @param {string[]} extensions 扩展列表（可选）
 * @returns {Promise<boolean>} 是否保存成功
 */
export async function saveCloudProject(
  creationOid: MongoDBId,
  lastModified: number,
  targets: Record<string, unknown>,
  meta: CloudProjectMeta = {},
  monitors: Record<string, unknown> = {},
  extensions: string[] = [],
): Promise<Res> {
  const req: Req = {
    creationOid,
    lastModified,
    targets,
    meta,
    monitors,
    extensions,
  };

  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
