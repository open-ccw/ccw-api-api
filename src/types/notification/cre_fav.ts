import { MongoDBId } from "../api";
import { CreationMinimal } from "../creation";
import { NotificationSenderInfo } from "../notification";

export interface CREATION_FAVORITE {
  assetMarketInfo: null;
  avatar: string;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    sender: string;
    sender_id: string;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "CREATION";
  };
  contentCategory: "CREATION_FAVORITE";
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
