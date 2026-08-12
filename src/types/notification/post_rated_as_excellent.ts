import { CNameOssUrl, MongoDBId } from "../api";

export interface POST_RATED_AS_EXCELLENT {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_type: "SOCIETY";
    subject_oid: null;
  };
  contentCategory: "POST_RATED_AS_EXCELLENT";
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
  title: string;
  triggeredById: MongoDBId;
  url: null;
}
