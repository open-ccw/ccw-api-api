import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface FOLLOWED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_type: "SOCIETY";
    sender: string;
    subject_oid: MongoDBId;
    sender_id: MongoDBId;
  };
  contentCategory: "FOLLOWED";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  message: null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: null;
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: null;
  subjectType: "SOCIETY";
  title: null;
  triggeredById: MongoDBId;
  url: null;
}
