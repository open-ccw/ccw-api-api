import { CNameOssUrl, MongoDBId, UUID } from "../api";
import { NotificationSenderInfo } from "../notification";

export interface POST_LIKED {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: null;
  commentType: null;
  content: {
    avatar: null;
    sender: string;
    sender_id: MongoDBId;
    slug: UUID;
    subject_oid: MongoDBId;
    subject_outline: string;
    subject_type: "POST";
  };
  contentCategory: "POST_LIKED";
  createdAt: number;
  creationInfo: null;
  extensionInfo: null;
  followInfo: null;
  likeIcon: null;
  message: null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: null;
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: "POST";
  title: null;
  triggeredById: MongoDBId;
  url: null;
}
