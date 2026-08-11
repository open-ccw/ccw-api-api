import { CNameOssUrl, MongoDBId } from "../api";
import { CreationMinimal } from "../creation";
import { NotificationSenderInfo } from "../notification";

export interface CREATION_COMMENTED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    avatar: CNameOssUrl;
    comments: string;
    ext: null;
    message: null;
    sender: string;
    senderType: "STUDENT";
    sender_id: MongoDBId;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "CREATION";
  };
  contentCategory: "CREATION_COMMENTED";
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
  senderType: "STUDENT";
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: "CREATION";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
