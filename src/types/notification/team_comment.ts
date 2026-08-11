import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface TEAM_COMMENTED {
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
    message: string | null;
    sender: string;
    senderType: "STUDENT";
    sender_id: MongoDBId;
    subject_oid: `${number}`;
    subject_outline: string;
    subject_type: "TEAM";
  };
  contentCategory: "TEAM_COMMENTED";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  /**
   * string为回复
   */
  message: string | null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: "STUDENT";
  studentInfo: null;
  subjectOid: `${number}`;
  subjectOutline: string;
  subjectType: "TEAM";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
