import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/storage/post-policy";

/**
 * 存储用途
 * - `PROJECT_ASSET` / `PROJECT_SB3`：必须传 `projectOid`
 * - 其余用途 `projectOid` 可选
 */
export type StoragePurpose =
  | "APPLICATION_ASSET"
  | "BACKPACK_ASSET"
  | "CREATOR_COLLEGE_COVER_IMAGE"
  | "CREATOR_COLLEGE_EDITOR_IMAGE"
  | "PROJECT_ASSET"
  | "PROJECT_SB3"
  | "SPINE_ASSET"
  | "USER_CONFIG"
  | "WORK_COVER";

export type Req = {
  contentHash: string;
  contentType: string;
  fileName: string;
  fileSize: number;
  projectOid?: MongoDBId;
  purpose: StoragePurpose;
};

export type CosPostPolicyFields = {
  "Content-Type": string;
  key: string;
  policy: string;
  "q-ak": string;
  "q-key-time": string;
  "q-sign-algorithm": string;
  "q-sign-time": string;
  "q-signature": string;
  "x-cos-forbid-overwrite": string;
};

export type CosPostPolicyRes = {
  bucket: string;
  expireAt: string;
  fields: CosPostPolicyFields;
  forbidOverwrite: boolean;
  objectKey: string;
  objectPrefix: string;
  provider: "COS";
  resourceUrl: CNameOssUrl;
  reviewRequired: boolean;
  reviewType: string;
  url: string;
};

export type Res = CosPostPolicyRes;

/**
 * 获取 COS 直传策略（post-policy）
 * @param {StoragePurpose} purpose 存储用途
 * @param {string} fileName 文件名
 * @param {string} contentType 文件 MIME 类型
 * @param {number} fileSize 文件大小（字节）
 * @param {string} contentHash 文件内容哈希
 * @param {MongoDBId} [projectOid] 项目 OID（`PROJECT_ASSET` / `PROJECT_SB3` 必传，其余可选）
 * @returns {Promise<Res>} COS 直传策略，含预签名 policy、resourceUrl 等
 * @example
 * ```json
 * {
 *   "bucket": "zhishi-1317963717",
 *   "expireAt": "2026-10-17T04:04:26.890274Z",
 *   "fields": {
 *     "q-sign-algorithm": "sha1",
 *     "x-cos-forbid-overwrite": "true",
 *     "q-ak": "AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *     "q-signature": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *     "q-key-time": "0000000000;0000000000",
 *     "q-sign-time": "0000000000;0000000000",
 *     "key": "user_projects_assets/example.svg",
 *     "Content-Type": "image/svg+xml",
 *     "policy": "eyJleHBpcmF0aW9uIjoiLi4uIn0="
 *   },
 *   "forbidOverwrite": true,
 *   "objectKey": "user_projects_assets/example.svg",
 *   "objectPrefix": "user_projects_assets/",
 *   "provider": "COS",
 *   "resourceUrl": "https://m.ccw.site/user_projects_assets/example.svg",
 *   "reviewRequired": true,
 *   "reviewType": "IMAGE",
 *   "url": "https://zhishi-1317963717.cos.ap-beijing.myqcloud.com"
 * }
 * ```
 * 拿到策略后，使用 FormData 直接向 `res.url` POST 上传（fields 顺序无关，file 必须最后）：
 * @example
 * ```js
 * const policy = await getStoragePostPolicy(...);
 * const form = new FormData();
 * Object.entries(policy.fields).forEach(([k, v]) => form.append(k, v));
 * form.append("file", file, fileName);
 * await fetch(policy.url, { method: "POST", body: form });
 * // 上传成功后文件地址：policy.resourceUrl
 * ```
 */
export async function getStoragePostPolicy(
  purpose: StoragePurpose,
  fileName: string,
  contentType: string,
  fileSize: number,
  contentHash: string,
  projectOid?: MongoDBId,
): Promise<Res> {
  const req: Req = {
    purpose,
    fileName,
    contentType,
    fileSize,
    contentHash,
    ...(projectOid ? { projectOid } : {}),
  };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
