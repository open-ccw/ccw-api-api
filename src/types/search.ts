import { CNameOssUrl, MongoDBId } from "./api";
import { Creation } from "./creation";
import { HashTag } from "./hashTag";
import { PagesRes } from "./pages";

export namespace SearchResult {
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
}
