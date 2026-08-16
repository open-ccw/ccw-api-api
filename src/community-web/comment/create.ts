import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { AccountTypes } from "src/types/account";
import { MinimalTopicInfo, SectionType } from "src/types/comment";

export const url = "https://community-web.ccw.site/comment/create";

export type Req = {
  /**
   * 这个实际上是没必要的
   */
  commenter?: {
    accountOid: MongoDBId;
    accountType: AccountTypes;
    avatar: CNameOssUrl;
  };
  content: string;
  sectionType: SectionType;
  topic: MinimalTopicInfo;
};

export type Res = {
  commenterId: number;
  content: string;
  createdAt: number;
  ext: null;
  id: number;
  parentId: null;
  receiverId: null;
  replyToId: null;
  sectionType: SectionType;
  status: "PUBLISHED";
  topicId: number;
  updatedAt: number;
  weight: null;
};

/**
 * 创建评论
 * @param {string} content 评论内容
 * @param {MinimalTopicInfo} topic 主题信息
 * @param {string} sectionType 板块类型
 * @returns {Promise<Res>} 创建的评论
 */
export async function createComment(
  content: string,
  topic: MinimalTopicInfo,
  sectionType: SectionType,
): Promise<Res> {
  topic.outline ??= "foo";
  const req: Req = { content, topic, sectionType };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
