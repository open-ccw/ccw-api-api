import { CNameOssUrl, MongoDBId } from "../api";

export interface CREATION_RECOMMENDED_AS_POTENTIAL {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_type: "CREATION";
    subject_oid: MongoDBId;
    subject_outline: string;
  };
  contentCategory: "CREATION_RECOMMENDED_AS_POTENTIAL";
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
  title: null;
  triggeredById: MongoDBId;
  url: null;
}
