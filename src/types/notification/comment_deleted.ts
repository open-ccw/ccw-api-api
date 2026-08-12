import { CNameOssUrl, MongoDBId } from "../api";

export interface COMMENT_DELETED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_type: "SOCIETY";
    subject_oid: MongoDBId;
    subject_outline: string;
  };
  contentCategory: "COMMENT_DELETED";
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
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: "SOCIETY";
  title: string;
  triggeredById: `${number}`;
  url: null;
}
