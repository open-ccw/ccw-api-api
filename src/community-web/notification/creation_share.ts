import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/notification/creation_share";

export type Req = {
  creationOid: MongoDBId;
  receiverOid: MongoDBId;
};

export type Res = boolean;

/**
 * 分享作品给好友
 * @param {MongoDBId} creationOid 作品 OID
 * @param {MongoDBId} receiverOid 接收者 OID
 * @returns {Promise<Res>} true 表示分享成功
 */
export async function shareCreationToFriend(
  creationOid: MongoDBId,
  receiverOid: MongoDBId,
): Promise<Res> {
  const req: Req = { creationOid, receiverOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
