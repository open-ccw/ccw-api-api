import { request } from "src/request";
import { ApiResponse, MongoDBId, CNameOssUrl } from "src/types/api";
import { Creation } from "src/types/creation";
import { SearchResult } from "src/types/search";

export const url = "https://community-web.ccw.site/user-card/detail";

/** 作品卡片展示的作品：在完整 Creation 基础上增加 contentUnavailable */
export type UserCardCreation = Creation & {
  contentUnavailable: null | boolean;
};

export type UserCardUser = {
  approvalTags: SearchResult.SearchApprovalTagRelation[];
  avatar: CNameOssUrl;
  bio: string;
  followingStatus: null | "UNFOLLOWED" | "FOLLOWED" | "BOTH_FOLLOWED";
  identityAuthRank: string;
  name: string;
  oid: MongoDBId;
  reputationScore: null | {
    rank: string;
    score: number;
    studentOid: MongoDBId;
  };
  statistics: null | {
    creationCount: number;
    followerCount: number;
    followingCount: number;
    likeCount: number;
  };
  virtualValue: CNameOssUrl | null;
};

export type Req = {
  oid: MongoDBId;
};

export type Res = {
  creation: UserCardCreation | null;
  user: UserCardUser;
};

/**
 * 获取用户卡片详情
 * @param {MongoDBId} oid 用户id
 * @returns {Promise<Res>} 用户卡片数据
 */
export async function getUserCardDetail(oid: MongoDBId): Promise<Res> {
  const req: Req = { oid };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
