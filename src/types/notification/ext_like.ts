import { CNameOssUrl, MongoDBId } from "../api";
import {
  NotificationExtensionInfo,
  NotificationSenderInfo,
} from "../notification";

export interface EXTENSION_LIKED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: null;
  commentType: null;
  content: {
    avatar: null;
    sender: string;
    sender_id: string;
    subject_oid: `${number}`;
    subject_outline: string;
    subject_type: "EXTENSION";
  };
  contentCategory: "EXTENSION_LIKED";
  createdAt: number;
  creationInfo: null;
  extensionInfo: NotificationExtensionInfo;
  followInfo: null;
  likeIcon: null;
  message: null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: null;
  studentInfo: null;
  subjectOid: `${number}`;
  subjectOutline: string;
  subjectType: "EXTENSION";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
