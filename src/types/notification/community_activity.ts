import { CNameOssUrl, MongoDBId } from "../api";

export interface COMMUNITY_ACTIVITY {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_type: "ACTIVITY";
    subject_oid: MongoDBId;
    subject_outline: string;
  };
  contentCategory: "COMMUNITY_ACTIVITY";
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
  subjectType: "ACTIVITY";
  title: null;
  triggeredById: MongoDBId;
  url: null;
}
