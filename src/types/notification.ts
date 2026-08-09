import { CNameOssUrl, MongoDBId } from "src/types/api";
import { CreationMinimal } from "src/types/creation";
import {
  NotificationContent,
  ContentCategory,
  SubjectType,
} from "src/types/notificationContent";

export type NotificationGroup =
  "CREATION_INTERACTION" | "COMMENT_TO_ME" | "FRIEND_SHARE" | "WEB_SYSTEM";

export interface NotificationSenderInfo {
  approvedContent: string | null;
  avatar: string;
  name: string;
  oid: MongoDBId;
}

export interface NotificationExtensionInfo {
  cover: string;
  createdAt: number;
  creationId: MongoDBId;
  description: string;
  eid: string;
  icon: string;
  id: number;
  latestProjectCoverLink: string | null;
  latestProjectLink: string | null;
  name: string;
  publisherId: MongoDBId;
  status: string;
  updatedAt: number;
}

export interface Notification {
  assetMarketInfo: null;
  avatar: CNameOssUrl;
  comment: string | null;
  commentType: string | null;
  content: NotificationContent;
  contentCategory: ContentCategory;
  createdAt: number;
  creationInfo: CreationMinimal | null;
  extensionInfo: NotificationExtensionInfo | null;
  followInfo: null;
  likeIcon: string | null;
  message: null;
  messageType: null;
  senderInfo: NotificationSenderInfo;
  senderName: string;
  senderOid: MongoDBId;
  senderType: string | null;
  studentInfo: null;
  subjectOid: MongoDBId;
  subjectOutline: string;
  subjectType: SubjectType;
  title: string | null;
  triggeredById: string;
  url: string | null;
}

export interface NotificationStats {
  ACTIVITY_ASSISTANT: number;
  COMMENT_TO_ME: number;
  CREATION_INTERACTION: number;
  CREATION_STATUS: number;
  FOLLOW_ME: number;
  FRIEND_SHARE: number;
  JUDGEMENT: number;
  WEB_SYSTEM: number;
}
