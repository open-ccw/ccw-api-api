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
  /** 回复楼中楼时传：所在楼层的顶层评论 id（回复顶层评论时可省略，后端自动补） */
  parentId?: number;
  /** 回复评论时传：实际被回复的评论 id */
  replyToId?: number;
  sectionType: SectionType;
  topic: MinimalTopicInfo;
};

export type Res = {
  commenterId: number;
  content: string;
  createdAt: number;
  ext: null;
  id: number;
  parentId: null | number;
  receiverId: null | number;
  replyToId: null | number;
  sectionType: SectionType;
  status: "PUBLISHED";
  topicId: number;
  updatedAt: number;
  weight: null;
};

/**
 * 创建评论（回复评论时传 parentId / replyToId）
 * @param {string} content 评论内容
 * @param {MinimalTopicInfo} topic 主题信息
 * @param {string} sectionType 板块类型
 * @param {number} [replyToId] 被回复的评论 id（回复评论时传）
 * @param {number} [parentId] 父评论 id（回复评论时传）

 * @returns {Promise<Res>} 创建的评论
 * @example 评论链 c -> b -> a（a 是顶层评论，b 回复 a，c 回复 b），topic 相同：
 *
 * 1. 发顶层评论 a（id: 1）：
 * ```ts
 * const a = await createComment("a内容", topic, sectionType);
 * // a.id = 1，无 parentId / replyToId
 * ```
 *
 * 2. 回复 a 发 b（id: 2，replyToId: 1）：
 * ```ts
 * const b = await createComment("b内容", topic, sectionType, 1);
 * // b.id = 2，b.replyToId = 1
 * // 请求未传 parentId，但后端会将其设为顶层评论 id：b.parentId = 1
 * ```
 *
 * 3. 回复 b 发 c（id: 3，replyToId: 2，parentId: 1）：
 * ```ts
 * const c = await createComment("c内容", topic, sectionType, 2, 1);
 * // c.replyToId = 2（被回复的 b），c.parentId = 1（顶层评论 id）
 * ```
 *
 * 即：b、c 的 parentId 都是 1。搜索/展示回复时按 parentId 归属到顶层楼层，
 * replyToId 才是实际被回复的评论。
 */
export async function createComment(
  content: string,
  topic: MinimalTopicInfo,
  sectionType: SectionType,
  replyToId?: number,
  parentId?: number,
): Promise<Res> {
  topic.outline ??= "foo";
  const req: Req = { content, topic, sectionType, parentId, replyToId };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
