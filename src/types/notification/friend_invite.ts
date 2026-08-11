import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface FRIEND_INVITE {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: null;
  commentType: null;
  content: {
    subject_type: "SOCIETY";
    message: string;
    sender_id: MongoDBId;
  };
  contentCategory: "FRIEND_INVITE";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  message: string;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: null;
  senderOid: MongoDBId;
  senderType: null;
  studentInfo: null;
  subjectOid: null;
  subjectOutline: null;
  subjectType: "SOCIETY";
  title: null;
  triggeredById: null;
  url: null;
}
