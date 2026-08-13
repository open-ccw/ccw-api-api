import { request } from "src/request";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { PagesRes } from "src/types/pages";
import { Creation } from "src/types/creation";
import { HashTag } from "src/types/hashTag";

export const url = "https://community-web.ccw.site/search/all";

export type Req = {
  keyword: string;
};

export interface SearchPost {
  author: {
    avatar: CNameOssUrl;
    name: string;
    oid: MongoDBId;
  };
  authorOid: MongoDBId;
  commentCount: number;
  content: string;
  createdAt: number;
  draftContent: null | string;
  excerpt: string;
  featureImage: {
    alt: string;
    caption: string;
    url: CNameOssUrl;
  };
  keywords: null | string[];
  likeCount: number;
  oid: MongoDBId;
  publishedAt: number;
  rank: string;
  rankUpdatedAt: number;
  reviewedAt: number;
  slug: string;
  status: string;
  tags: string[];
  title: string;
  updatedAt: number;
  viewCount: number;
  visibility: string;
}

interface SearchApprovalTag {
  bizId: MongoDBId | null;
  bizType: string | null;
  description: string;
  iconLink: CNameOssUrl;
  id: number;
  mediumImage: CNameOssUrl;
  name: string;
  prerequisite: string;
  tag: string | null;
}

interface SearchApprovalTagRelation {
  adorned: boolean;
  approvalIconLink: CNameOssUrl;
  approvalTag: SearchApprovalTag;
  approvalTagId: number;
  approvalTagName: string;
  createdAt: number;
  id: number;
  objectId: MongoDBId;
  objectType: "STUDENT";
  updatedAt: number;
}

export interface SearchStudent {
  approvalTagRelations: SearchApprovalTagRelation[];
  avatar: CNameOssUrl;
  bio: string;
  createdAt: number;
  creationCount: number;
  creations: Creation[];
  followerCount: number;
  followingStatus: null | "UNFOLLOWED" | "FOLLOWED" | "BOTH_FOLLOWED";
  gender: "MALE" | "FEMALE" | null;
  name: string;
  oid: MongoDBId;
  studentNumber: `${number}`;
  updatedAt: number;
  virtualValue: CNameOssUrl | null;
}

export interface SearchResultCreation {
  pageResult: PagesRes<Creation>;
  type: "CREATION";
}

export interface SearchResultStudent {
  pageResult: PagesRes<SearchStudent>;
  type: "STUDENT";
}

export interface SearchResultPost {
  pageResult: PagesRes<SearchPost>;
  type: "POST";
}

export interface SearchResultHashTag {
  pageResult: PagesRes<HashTag>;
  type: "HASHTAG";
}

export type SearchResultItem =
  | SearchResultCreation
  | SearchResultStudent
  | SearchResultPost
  | SearchResultHashTag;

export type Res = {
  results: SearchResultItem[];
};

/**
 * 全局搜索
 * @param {string} keyword 搜索关键词
 * @returns {Promise<Res>} 搜索结果
 */
export async function searchAll(keyword: string): Promise<Res> {
  const req: Req = { keyword };
  return await request
    .post<ApiResponse<Res>>(url, req)
    .then((res) => res.data.body);
}
