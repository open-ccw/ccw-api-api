import { CNameOssUrl, MongoDBId } from "../api";
import {
  NotificationExtensionInfo,
  NotificationSenderInfo,
} from "../notification";

export interface EXTENSION_COMMENT_REPLIED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    avatar: CNameOssUrl;
    comments: string;
    ext: {
      /**
       * 作者id
       */
      target: MongoDBId;
    };
    message: string;
    sender: string;
    senderType: "STUDENT";
    sender_id: MongoDBId;
    subject_oid: `${number}`;
    subject_outline: string;
    subject_type: "EXTENSION";
  };
  contentCategory: "EXTENSION_COMMENT_REPLIED";
  createdAt: number;
  creationInfo: null;
  extensionInfo: NotificationExtensionInfo;
  followInfo: null;
  likeIcon: null;
  message: string;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: "STUDENT";
  studentInfo: null;
  subjectOid: `${number}`;
  subjectOutline: string;
  subjectType: "EXTENSION";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
