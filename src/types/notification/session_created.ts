import { CNameOssUrl } from "../api";

export interface SESSION_CREATED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string;
  commentType: null;
  content: {
    comments: string;
    subject_oid: null;
    subject_type: "SOCIETY";
  };
  contentCategory: "SESSION_CREATED";
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
  triggeredById: `${number}`;
  url: null;
}
