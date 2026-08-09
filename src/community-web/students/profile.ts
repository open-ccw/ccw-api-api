import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";
import { StudentProfile } from "src/types/userData";

export const url = "https://community-web.ccw.site/students/profile";

export type Req = {
  studentNumber?: string;
  studentOid?: MongoDBId;
};

export type Res = StudentProfile;

/**
 * 获取学生个人主页资料
 * @param {MongoDBId} studentOid 学生id
 * @returns {Promise<Res>} 学生资料
 */
export async function getStudentProfile({
  studentOid,
  studentNumber,
}: {
  studentNumber?: string;
  studentOid?: MongoDBId;
}): Promise<Res> {
  const req: Req = { studentOid, studentNumber };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
