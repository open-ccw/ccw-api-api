import { CNameOssUrl, MongoDBId } from "../api";

export interface CREATION_BANNED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "CREATION";
  };
  contentCategory: "CREATION_BANNED";
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
  subjectType: "CREATION";
  title: string;
  triggeredById: MongoDBId;
  url: null;
}
