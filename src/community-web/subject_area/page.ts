import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, MongoDBId, CNameOssUrl } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://community-web.ccw.site/subject_area/page";

export type SubjectAreaModuleComponent = {
  data: {
    bgColor?: string;
    bgImage?: CNameOssUrl;
    col?: number;
    creationOids?: MongoDBId[];
    display?: string;
    hover?: boolean;
    origin: string;
    overflow?: string;
    row?: string;
    targetLink?: string;
    targetType?: string;
  };
  type: string;
};

export type SubjectAreaModule = {
  components: SubjectAreaModuleComponent[];
  filled: boolean;
  gutter: number;
  subtitle: string;
  subtitleColor: string;
  title: string;
  titleColor: string;
  type: string;
};

export type SubjectAreaGroup = {
  bgAtmosphere: null | string;
  bgColor: string;
  bgImage: CNameOssUrl;
  id: number;
  lottieJsonUrl: null | CNameOssUrl;
  modules: SubjectAreaModule[];
  moreLink: null | string;
  moreLinkText: null | string;
  subjectAreaId: number;
  subtitle: string;
  subtitleColor: string;
  title: string;
  titleColor: string;
  verticalPadding: number;
};

export type SubjectAreaScene = "HOMEPAGE";

export type SubjectAreaItem = {
  creationOids: MongoDBId[];
  enabled: boolean;
  iconLink: null | CNameOssUrl;
  id: number;
  location: null | string;
  platform: "WEB";
  priority: number;
  subjectAreaGroup: SubjectAreaGroup;
  subtitle: null | string;
  targetLink: null | string;
  title: string;
  visibleFor: string[];
};

export type Req = {
  scene: SubjectAreaScene;
};

export type Res = PagesRes<SubjectAreaItem>;

/**
 * 分页获取主页推荐列表
 * @param {SubjectAreaScene} scene 场景
 * @param {Partial<PageArgs<"createdAt" | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 主页推荐分页数据
 */
export async function getSubjectArea<T extends string>(
  scene: SubjectAreaScene,
  pageArgs_: Partial<PageArgs<"createdAt" | T>> = {
    sortField: "createdAt",
  },
): Promise<Res> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = { scene };
  return await request
    .post<ApiResponse<Res>>(queryUrl, req)
    .then((res) => res.data.body);
}
