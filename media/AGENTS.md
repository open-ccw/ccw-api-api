# AGENTS.md

AI 编码助手入口。开始任务前先读本文档，按导航查对应资料，不要直接遍历 `src/` 源码。

## 文档导航（先看文档，再看源码）

| 要做什么 | 先看哪里 |
| --- | --- |
| 找某个 API 的导出名、URL、源码位置 | [API-INDEX.md](./API-INDEX.md) |
| 查 API 参数、返回类型、JSDoc（结构化） | `api-manifest.json`，用 `npm run api -- 关键词` 查询 |
| 了解功能用法与业务约定 | [README.md](./README.md) |
| 新增或修改 API 的代码规范 | [AGENT.md](./AGENT.md) |
| 查公共类型（OID / URL / 分页 / 通知） | `src/types/` |
| 查请求注入方式 | `src/request.ts` |

检索顺序：`API-INDEX.md` → `npm run api -- 关键词` → `README.md` → `AGENT.md` → 具体源码。不要整份读取 `api-manifest.json`（约 120 KB）或 `docs/typedoc-reflection.json`（约 5 MB），用查询命令按需取。

## 项目速览

TypeScript API SDK，按后端域名分组，共 164 个 API 函数、6 个服务：

| 服务目录 | 导出对象 | 说明 |
| --- | --- | --- |
| `src/sso` | `sso` | 登录、登出、短信验证码 |
| `src/community-web` | `communityWeb` | 作品 / 学生 / 通知 / 搜索 / 商城等主业务 |
| `src/gandi-main` | `gandiMain` | 公告、时间、排行榜 |
| `src/bfs-web` | `bfsWeb` | 扩展管理与打赏 |
| `src/community-web-cloud-database` | `communityWebCloudDatabase` | 作品 / 用户云变量 |
| `src/op-parent-api` | `opParentApi` | 图形验证码 |

根入口 `src/index.ts` 导出全部服务与 `setRequestUtils`。包不内置 HTTP 库，调用方需注入 request 实现。

## 硬性规则

1. 一个 API 文件只放一个接口，文件名用 `kebab-case`，放在与 URL 路径对应的目录。
2. 文件内固定 7 段：import → `url` → `Req` → `Res` → 辅助类型 → JSDoc → 导出函数。
3. 所有请求用 `request.post<ApiResponse<Res>>(url, req).then((r) => r.data.body)`。
4. OID 类字段类型用 `MongoDBId`，URL 字段用 `CNameOssUrl`，优先复用 `src/types/` 已有类型。
5. 新增 API 后必须在对应服务的 `index.ts` 导入并加入导出对象，否则外部访问不到。
6. 每个 API 配同名 `.test.ts`，从 `src/testUtils` 导入测试工具。
7. 路径别名统一用 `src/...`，不写长相对路径。
8. 新增或修改 API 后运行 `npm run index` 刷新 `API-INDEX.md`，运行 `npm run manifest` 刷新 `api-manifest.json`。

## 常用命令

```bash
npm test          # node:test + tsx
npm run typecheck # tsc --noEmit
npm run build     # 构建 ESM + CJS + d.ts
npm run index     # 重新生成 API-INDEX.md
npm run manifest  # 生成 docs/typedoc-reflection.json + api-manifest.json
npm run api -- 关键词 -- --compact  # 查询 API（flag 前需再加一个 --）
npm run doc       # 生成 TypeDoc
```

完整规范与示例见 [AGENT.md](./AGENT.md)。
