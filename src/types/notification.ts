import { MongoDBId } from "src/types/api";
import { CREATION_FAVORITE } from "./notification/cre_fav";
import { CREATION_LIKED } from "./notification/cre_like";
import { POST_FAVORITE } from "./notification/post_fav";
import { POST_LIKED } from "./notification/post_like";
import { ASSET_MARKET_LIKED } from "./notification/asset_like";
import { ASSET_MARKET_DONATE } from "./notification/asset_donate";
import { ASSET_MARKET_PURCHASED } from "./notification/asset_purchased";
import { CREATION_REMIXED } from "./notification/cre_remix";
import { POST_COMMENT } from "./notification/post_comment";
import { CREATION_COMMENT_REPLIED } from "./notification/cre_comment_reply";
import { EXTENSION_COMMENT_REPLIED } from "./notification/ext_comment_reply";
import { CREATION_COMMENTED } from "./notification/cre_comment";
import { TEAM_COMMENTED } from "./notification/team_comment";
import { EXTENSION_LIKED } from "./notification/ext_like";
import { EXTENSION_COMMENTED } from "./notification/ext_comment";
import { CREATION_SHARE } from "./notification/cre_share";
import { FRIEND_INVITE } from "./notification/friend_invite";
import { PROFILE_LEAVE_WORDS } from "./notification/profile_leave_words";
import { FOLLOWED } from "./notification/followed";
import { SESSION_CREATED } from "./notification/session_created";
import { COMMUNITY_ACTIVITY } from "./notification/community_activity";
import { POST_VISIBILITY_CHANGED } from "./notification/post_visibility_changed";
import { CREATION_RECOMMENDED_AS_POTENTIAL } from "./notification/creation_recommended_as_potential";
import { CREATION_CHECKED } from "./notification/creation_checked";
import { COMMENT_DELETED } from "./notification/comment_deleted";
import { POST_RATED_AS_EXCELLENT } from "./notification/post_rated_as_excellent";
import { REPORT_LOG_REJECTED } from "./notification/report_log_rejected";
import { CREATION_BANNED } from "./notification/creation_banned";

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

/**
 * senderName是旧的
 */
export type NotificationPage =
  | CREATION_FAVORITE
  | CREATION_LIKED
  | CREATION_REMIXED
  | CREATION_COMMENTED
  | CREATION_COMMENT_REPLIED
  | CREATION_SHARE
  | CREATION_RECOMMENDED_AS_POTENTIAL
  | CREATION_CHECKED
  | EXTENSION_LIKED
  | EXTENSION_COMMENTED
  | EXTENSION_COMMENT_REPLIED
  | POST_FAVORITE
  | POST_LIKED
  | POST_COMMENT
  | POST_VISIBILITY_CHANGED
  | ASSET_MARKET_LIKED
  | ASSET_MARKET_DONATE
  | ASSET_MARKET_PURCHASED
  | TEAM_COMMENTED
  | FRIEND_INVITE
  | PROFILE_LEAVE_WORDS
  | FOLLOWED
  | SESSION_CREATED
  | COMMUNITY_ACTIVITY
  | COMMENT_DELETED
  | POST_RATED_AS_EXCELLENT
  | REPORT_LOG_REJECTED
  | CREATION_BANNED;

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
