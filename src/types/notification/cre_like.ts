import { CNameOssUrl, MongoDBId } from "../api";
import { CreationMinimal } from "../creation";
import { NotificationSenderInfo } from "../notification";

export interface CREATION_LIKED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: null;
  commentType: null;
  content: {
    avatar: CNameOssUrl;
    homework_id: MongoDBId;
    homework_title: string;
    like_icon: CNameOssUrl;
    sender: string;
    sender_id: MongoDBId;
    student_id: `${number}`;
    subject_oid: MongoDBId;
    subject_type: "CREATION";
  };
  contentCategory: "CREATION_LIKED";
  createdAt: number;
  creationInfo: CreationMinimal;
  extensionInfo: null;
  followInfo: null;
  likeIcon: CNameOssUrl;
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
