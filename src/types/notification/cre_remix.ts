import { CNameOssUrl, MongoDBId } from "../api";
import { CreationMinimal } from "../creation";
import { NotificationSenderInfo } from "../notification";

export interface CREATION_REMIXED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    remixed_creation_oid: MongoDBId;
    remixed_creation_title: string;
    sender: string;
    sender_id: MongoDBId;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "CREATION";
  };
  contentCategory: "CREATION_REMIXED";
  createdAt: number;
  creationInfo: CreationMinimal;
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
  subjectOutline: string;
  subjectType: "CREATION";
  title: null;
  triggeredById: MongoDBId;
  url: null;
}
