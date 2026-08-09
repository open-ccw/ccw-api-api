import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

export const url = "https://community-web.ccw.site/notification/user_recommend";

export type Req = {
  receiverOid: MongoDBId;
  recommendedStudentOid: MongoDBId;
};

export type Res = boolean;

/**
 * 推荐用户给好友
 * @param {MongoDBId} receiverOid 接收者 OID
 * @param {MongoDBId} recommendedStudentOid 被推荐学生 OID
 * @returns {Promise<Res>} true 表示推荐成功
 */
export async function recommendUser(
  receiverOid: MongoDBId,
  recommendedStudentOid: MongoDBId,
): Promise<Res> {
  const req: Req = { receiverOid, recommendedStudentOid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
