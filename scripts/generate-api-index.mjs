import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "src");

const SERVICE_EXPORTS = {
  sso: "sso",
  "community-web": "communityWeb",
  "gandi-main": "gandiMain",
  "bfs-web": "bfsWeb",
  "community-web-cloud-database": "communityWebCloudDatabase",
  "op-parent-api": "opParentApi",
};

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith(".ts") && !entry.name.endsWith(".test.ts"))
      files.push(full);
  }
  return files;
}

function parseIndexObject(indexFile) {
  const source = fs.readFileSync(indexFile, "utf8");
  const body = source.match(/export const \w+\s*=\s*\{([\s\S]*?)\n\};/);
  const map = new Map();
  if (!body) return map;
  for (const line of body[1].split("\n")) {
    const renamed = line.match(/^\s*(\w+)\s*:\s*(\w+)\s*,?\s*$/);
    if (renamed) {
      map.set(renamed[2], renamed[1]);
      continue;
    }
    const plain = line.match(/^\s*(\w+)\s*,?\s*$/);
    if (plain) map.set(plain[1], plain[1]);
  }
  return map;
}

function extractDoc(source) {
  const blocks = [...source.matchAll(/\/\*\*([\s\S]*?)\*\//g)];
  for (const block of blocks) {
    const lines = block[1]
      .split("\n")
      .map((line) => line.replace(/^\s*\*\s?/, "").trim())
      .filter((line) => line && !line.startsWith("@"));
    if (lines.length) return lines[0];
  }
  return "";
}

const files = walk(SRC);
const services = {};

for (const dir of Object.keys(SERVICE_EXPORTS)) {
  services[dir] = { exportName: SERVICE_EXPORTS[dir], apis: [] };
}

for (const file of files) {
  const relative = path.relative(SRC, file).replace(/\\/g, "/");
  const service = relative.split("/")[0];
  if (!(service in services)) continue;

  const source = fs.readFileSync(file, "utf8");
  const urlMatch = source.match(/export const url\s*=\s*["'`]([^"'`]+)["'`]/);
  if (!urlMatch) continue;

  const functions = [
    ...source.matchAll(/export async function\s+(\w+)/g),
  ].map((match) => match[1]);
  if (!functions.length) continue;

  const indexFile = path.join(SRC, service, "index.ts");
  const exportMap = fs.existsSync(indexFile)
    ? parseIndexObject(indexFile)
    : new Map();

  for (const fn of functions) {
    services[service].apis.push({
      fn,
      exportName: exportMap.get(fn) ?? fn,
      url: urlMatch[1],
      file: `src/${relative}`,
      doc: extractDoc(source),
    });
  }
}

let markdown = `# API 索引（自动生成）\n\n`;
markdown += `> 由 \`npm run index\` 生成，请勿手工编辑。源码变更后运行该命令刷新。\n\n`;
markdown += `本文档列出全部 API 的 **导出函数名 / URL / 源码路径**，供 AI 与开发者快速定位。\n`;
markdown += `调用示例与业务逻辑说明见 [README.md](./README.md)；编写规范见 [AGENT.md](./AGENT.md)。\n\n`;

let total = 0;
for (const [dir, { exportName, apis }] of Object.entries(services)) {
  apis.sort((a, b) => a.fn.localeCompare(b.fn));
  total += apis.length;
  markdown += `## ${exportName}（\`src/${dir}\`，${apis.length} 个）\n\n`;
  markdown += `| 调用方式 | URL | 源码 |\n| --- | --- | --- |\n`;
  for (const api of apis) {
    const call = `${exportName}.${api.exportName}`;
    markdown += `| \`${call}\` | \`${api.url}\` | [\`${api.file}\`](./${api.file}) |\n`;
  }
  markdown += `\n`;
}

markdown += `## 统计\n\n共 ${total} 个 API 函数。\n`;

fs.writeFileSync(path.join(ROOT, "API-INDEX.md"), markdown);
console.log(`Generated API-INDEX.md with ${total} APIs.`);
