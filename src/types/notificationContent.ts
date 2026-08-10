import { CNameOssUrl, MongoDBId, UUID } from "./api";

export type SubjectType =
  "POST" | "CREATION" | "EXTENSION" | "PROFILE" | "SOCIETY" | "ACTIVITY";

export type ContentCategory =
  | "POST_LIKED"
  | "POST_FAVORITE"
  | "POST_COMMENT"
  | "CREATION_LIKED"
  | "CREATION_FAVORITE"
  | "CREATION_COMMENTED"
  | "CREATION_SHARE"
  | "EXTENSION_LIKED"
  | "EXTENSION_COMMENTED"
  | "EXTENSION_COMMENT_REPLIED"
  | "PROFILE_LEAVE_WORDS"
  | "SESSION_CREATED"
  | "COMMUNITY_ACTIVITY"
  | "FOLLOWED"
  | "POST_VISIBILITY_CHANGED";

export interface PostNotificationContentBase {
  avatar: null;
  sender: string;
  sender_id: MongoDBId;
  slug: UUID;
  subject_oid: MongoDBId;
  subject_outline: string;
  subject_type: "POST";
}

export interface PostLikedContent extends PostNotificationContentBase {}

export interface PostFavContent extends PostNotificationContentBase {
  comments: string;
}

export interface PostCommentContent {
  avatar: CNameOssUrl;
  comments: string;
  ext: { slug: UUID } | null;
  message: string | null;
  sender: string;
  senderType: "STUDENT" | string;
  sender_id: MongoDBId;
  subject_oid: MongoDBId;
  subject_outline: string;
  subject_type: "POST";
}

export interface CreationNotificationContentBase {
  sender: string;
  sender_id: MongoDBId;
  subject_oid: MongoDBId;
  subject_type: "CREATION";
}

export interface CreationLikeNotificationContent extends CreationNotificationContentBase {
  avatar: CNameOssUrl;
  homework_id: MongoDBId;
  homework_title: string;
  like_icon: CNameOssUrl;
  student_id: `${number}`;
}

export interface CreationFavContent extends CreationNotificationContentBase {
  comments: string;
  subject_outline: string;
}

export interface CreationCommentedContent {
  avatar: CNameOssUrl;
  comments: string;
  ext: null;
  message: string | null;
  sender: string;
  senderType: "STUDENT" | string;
  sender_id: MongoDBId;
  subject_oid: MongoDBId;
  subject_outline: string;
  subject_type: "CREATION";
}

export interface CreationShareContent {
  sender_id: MongoDBId;
  subject_oid: MongoDBId;
  subject_outline: string;
  subject_type: "CREATION";
}

export interface ExtensionLikedContent {
  avatar: null;
  sender: string;
  sender_id: MongoDBId;
  subject_oid: string;
  subject_outline: string;
  subject_type: "EXTENSION";
}

export interface ExtensionCommentedContent {
  avatar: CNameOssUrl;
  comments: string;
  ext: { target: MongoDBId } | null;
  message: string | null;
  sender: string;
  senderType: "STUDENT" | string;
  sender_id: MongoDBId;
  subject_oid: string;
  subject_outline: string;
  subject_type: "EXTENSION";
}

export interface ExtensionCommentRepliedContent extends ExtensionCommentedContent {}

export interface ProfileLeaveWordsContent {
  avatar: CNameOssUrl;
  comments: string;
  ext: null;
  message: string | null;
  sender: string;
  senderType: "STUDENT" | string;
  sender_id: MongoDBId;
  subject_oid: MongoDBId;
  subject_outline: string;
  subject_type: "PROFILE";
}

export interface SessionCreatedContent {
  comments: string;
  subject_oid: null;
  subject_type: "SOCIETY";
}

export interface CommunityActivityContent {
  comments: string;
  subject_oid: MongoDBId;
  subject_outline: string;
  subject_type: "ACTIVITY";
}

export interface FollowedContent {
  comments: string;
  sender: string;
  sender_id: MongoDBId;
  subject_oid: MongoDBId;
  subject_type: "SOCIETY";
}

export interface PostVisibilityChangedContent {
  comments: string;
  subject_oid: null;
  subject_type: "SOCIETY";
}

export type NotificationContent =
  | PostLikedContent
  | PostFavContent
  | PostCommentContent
  | CreationLikeNotificationContent
  | CreationFavContent
  | CreationCommentedContent
  | CreationShareContent
  | ExtensionLikedContent
  | ExtensionCommentedContent
  | ExtensionCommentRepliedContent
  | ProfileLeaveWordsContent
  | SessionCreatedContent
  | CommunityActivityContent
  | FollowedContent
  | PostVisibilityChangedContent
  | Record<string, unknown>;
