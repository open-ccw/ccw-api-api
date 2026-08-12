import { CNameOssUrl, MongoDBId } from "../api";
import { NotificationSenderInfo } from "../notification";
import AssetMarketInfo from "./asset_info";

export interface ASSET_MARKET_PURCHASED {
  assetMarketInfo: AssetMarketInfo;
  avatar: CNameOssUrl;
  comment: null;
  commentType: null;
  content: {
    avatar: null;
    sender: string;
    sender_id: MongoDBId;
    subject_oid: `${number}`;
    subject_outline: string;
    subject_type: "ASSET_MARKET";
  };
  contentCategory: "ASSET_MARKET_PURCHASED";
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
  subjectOid: `${number}`;
  subjectOutline: string;
  subjectType: "ASSET_MARKET";
  title: null;
  triggeredById: `${number}`;
  url: null;
}
