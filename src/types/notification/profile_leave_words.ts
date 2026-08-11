import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface PROFILE_LEAVE_WORDS {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    avatar: CNameOssUrl;
    comments: string;
    ext: null;
    /**
     * string为回复
     */
    message: null | string;
    sender: string;
    senderType: "STUDENT";
    sender_id: MongoDBId;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "PROFILE";
  };
  contentCategory: "PROFILE_LEAVE_WORDS";
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
  subjectType: "PROFILE";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
