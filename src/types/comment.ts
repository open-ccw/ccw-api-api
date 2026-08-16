import { OtherUser } from "src/types/userData";

export interface Comment {
  commenter: OtherUser;
  commenterId: number;
  /**
   * 评论内容
   */
  content: string;
  createdAt: number;
  dislikeCount: number;
  disliked: boolean;
  ext: {};
  hiddenOpinion: null;
  id: number;
  likeCount: number;
  liked: boolean;
  /**
   * 如果是评论,则为null,如果是回复,则为回复的评论的id
   */
  parentId: number | null;
  receiver: OtherUser | null;
  receiverId: number;
  replyCount: null | number;
  replyToId: number;
  reported: boolean;
  sectionType: "COMMENT";
  status: "PUBLISHED" | "FOLDED";
  subComments: [];
  topic: TopicInfo;
  /**
   * 回复的文章/扩展id
   */
  topicId: number;
  updatedAt: number;
  weight: number;
}

export interface TopicInfo extends MinimalTopicInfo {
  createdAt: number;
  ext: {
    /**
     * 文章uuid可能被包含
     */
    slug?: string;
  };
  id: number;
  /**
   * 文章名称/扩展名称/作品名称
   */

  updatedAt: number;
}

export type MinimalTopicInfo = {
  /**
   * 和响应无关,但至少要传一个字符进去
   */
  outline?: string;
  subjectOid: string;
  subjectType: SubjectType;
};

export type SubjectType = "EXTENSION" | "POST" | "CREATION" | "PROFILE";
export type SectionType = "REVIEW" | "COMMENT";
