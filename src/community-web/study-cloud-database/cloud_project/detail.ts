import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url =
  "https://community-web.ccw.site/study-cloud-database/cloud_project/detail";

export type Req = {
  creationOid: MongoDBId;
};

export type CloudProjectMeta = {
  agent?: string;
  platform?: {
    name?: string;
    url?: string;
  };
  semver?: string;
  vm?: string;
};

export type CloudProjectData = {
  cloudProject: {
    extensions: string[];
    gandi: null | Record<string, any>;
    meta: CloudProjectMeta;
    monitors: Record<string, any>;
    targets: string;
  };
  creationOid: MongoDBId;
  lastModified: number;
};

export type Res = CloudProjectData;

/**
 * 获取云项目详情
 * @param {MongoDBId} creationOid 作品 oid
 * @returns {Promise<Res>} 云项目详情
 */
export async function getCloudProjectDetail(
  creationOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
