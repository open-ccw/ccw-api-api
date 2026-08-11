import { CNameOssUrl, MongoDBId } from "../api";

export default interface AssetMarketInfo<T = string> {
  categories: [];
  containsAssetCount: null;
  containsTypes: [];
  createdAt: 1724136098000;
  creatorOid: MongoDBId;
  description: string;
  ext: {};
  highResolutionImages: [];
  id: `${number}`;
  keywords: [];
  name: string;
  path: `/${string}`;
  previewImages: CNameOssUrl[];
  size: number;
  stats: {
    commentCount: number;
    donateCount: number;
    likeCount: number;
    purchaseCount: number;
    shareCount: number;
  };
  status: "PUBLISHED";
  /**
   * publisher
   */
  student: {
    avatar: CNameOssUrl;
    name: string;
    oid: MongoDBId;
    studentNumber: `${number}`;
  };
  tags: string[];
  themePack: null;
  type: "SOUND" | T;
  updatedAt: number;
  uri: CNameOssUrl;
}
