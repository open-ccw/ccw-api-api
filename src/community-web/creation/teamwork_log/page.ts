import { request } from "src/request";
import { DEFAULT_PAGE_ARGS, queryPage } from "src/queryPages";
import { ApiResponse, CNameOssUrl, MongoDBId } from "src/types/api";
import { PagesRes, PageArgs } from "src/types/pages";

export const url = "https://community-web.ccw.site/creation/teamwork_log/page";

export type TeamworkLogOperator = {
  avatar: CNameOssUrl;
  name: string;
  oid: MongoDBId;
};

export type TeamworkLogItem<T> = {
  content: T;
  createdAt: number;
  creationId: MongoDBId;
  id: string;
  operateTarget: string;
  operator: TeamworkLogOperator;
  operatorId: MongoDBId;
};

export type TeamworkLogContent = {
  key:
    | "closedProject"
    | "openedProject"
    | "addedSomeBlocks"
    | "deletedSomeBlocks"
    | "syncedVariables"
    | "syncedLists"
    | "usedProjectHistoryVersion"
    | "addedSprite"
    | `created${"Global" | "Private"}${"Variable" | "List"}`;
  operator: {
    avatar: CNameOssUrl;
    clientId: string;
    name: string;
    oid: MongoDBId;
  };
  params: any;
};

export type SortField = "createdAt";

export type OperateTargets =
  "VARIABLE" | "BLOCK" | "SPRITE" | "PROJECT" | "TEAMWORK";

export type Req = {
  creationId: MongoDBId;
  operateTargets: OperateTargets[];
};

export type Res<T> = PagesRes<TeamworkLogItem<T>>;

/**
 * 获取团队协作日志分页
 * @param {MongoDBId} creationId 作品id
 * @param {OperateTargets[]} operateTargets 操作目标过滤
 * @param {Partial<PageArgs<SortField | T>>} pageArgs_ 分页参数
 * @returns {Promise<Res>} 协作日志分页列表
 */
export async function getTeamworkLog<T extends string>(
  creationId: MongoDBId,
  operateTargets: OperateTargets[],
  pageArgs_: Partial<PageArgs<SortField | T>> = {
    sortField: "createdAt",
  },
): Promise<Res<TeamworkLogContent>> {
  const pageArgs = {
    ...DEFAULT_PAGE_ARGS,
    ...pageArgs_,
  };
  const queryUrl = queryPage(url, pageArgs);
  const req: Req = {
    creationId,
    operateTargets,
  };
  const res = await request
    .post<ApiResponse<Res<string>>>(queryUrl, req)
    .then((res) => res.data.body);
  const { data: logs } = res;
  const parsedLogs = logs.map((l) => {
    const { content } = l;
    return {
      ...l,
      content: JSON.parse(content) as TeamworkLogContent,
    };
  });
  return {
    ...res,
    data: parsedLogs,
  };
}
