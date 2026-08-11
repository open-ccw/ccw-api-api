import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface POST_COMMENT {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    avatar: CNameOssUrl;
    comments: string;
    ext: {
      slug: string;
    };
    /**
     * string为回复
     */
    message: string | null;
    sender: string;
    senderType: "STUDENT";
    sender_id: MongoDBId;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "POST";
  };
  contentCategory: "POST_COMMENT";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  /**
   * string为回复
   */
  message: null | string;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: "STUDENT";
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: "POST";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
