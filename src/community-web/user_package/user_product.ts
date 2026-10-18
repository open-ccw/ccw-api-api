import { request } from "src/request";
import { ApiResponse, MongoDBId, CNameOssUrl } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";
import { queryPage, DEFAULT_PAGE_ARGS } from "src/queryPages";
import { AccountTypes } from "src/types/account";

export const url = "https://community-web.ccw.site/user_package/user_product";

export type Req = {
  page: number;
  perPage: number;
  productCategory: number;
  sortType: "ASC" | "DESC";
};

export type Res = PagesRes<UserProduct>;

export type UserProduct = {
  createdAt: number | null;
  description: string;
  exchangeOrderId: string | null;
  expiredAt: number | null;
  id: number;
  isExpire: boolean;
  name: string;
  picUrl: CNameOssUrl;
  productCategory: number;
  productOid: MongoDBId;
  productSource: null;
  status: boolean;
  updatedAt: number | null;
  userOid: MongoDBId;
  userType: AccountTypes;
  validFrom: number;
  virtualValue: CNameOssUrl;
};

export enum ProductCategory {
  AVATAR_FRAME = 5,
}

/**
 * 分页获取用户商品（如头像框）
 * @param {ProductCategory} productCategory 商品分类，默认5为头像框
 * @param {Partial<PageArgs<SortField>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 分页用户商品数据
 */
export async function getUserProducts<SortField extends string>(
  productCategory: ProductCategory = ProductCategory.AVATAR_FRAME,
  pageArgs_: Partial<PageArgs<SortField>> = {},
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    page: pageArgs.page,
    perPage: pageArgs.perPage,
    sortType: pageArgs.sortType,
    productCategory,
  };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
