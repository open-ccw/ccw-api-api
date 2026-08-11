import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface CREATION_SHARE {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: null;
  commentType: null;
  content: {
    sender_id: MongoDBId;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "CREATION";
  };
  contentCategory: "CREATION_SHARE";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  message: null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: null;
  senderOid: MongoDBId;
  senderType: null;
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: "CREATION";
  title: null;
  triggeredById: null;
  url: null;
}
