import { CNameOssUrl, MongoDBId } from "../api";

export interface REPORT_LOG_REJECTED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_oid: null;
    subject_type: "SOCIETY";
  };
  contentCategory: "REPORT_LOG_REJECTED";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  message: null;
  messageType: null;
  senderInfo: null;
  senderName: null;
  senderOid: null;
  senderType: null;
  studentInfo: null;
  subjectOid: null;
  subjectOutline: null;
  subjectType: "SOCIETY";
  title: null;
  triggeredById: null;
  url: null;
}
