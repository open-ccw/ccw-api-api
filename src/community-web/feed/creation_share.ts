import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/feed/creation_share";

export type Req = {
  creationOid: MongoDBId;
};

export type Res = boolean;

/**
 * 分享作品到动态
 * @param {MongoDBId} creationOid 作品 OID
 * @returns {Promise<Res>} true 表示分享成功
 */
export async function shareCreation(creationOid: MongoDBId): Promise<Res> {
  const req: Req = { creationOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
