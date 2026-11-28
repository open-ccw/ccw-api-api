import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TYPEDOC_BIN = path.join(ROOT, "node_modules/typedoc/bin/typedoc");
const REFLECTION = path.join(ROOT, "docs/typedoc-reflection.json");
const MANIFEST = path.join(ROOT, "api-manifest.json");

const SERVICE_EXPORTS = {
  sso: "sso",
  "community-web": "communityWeb",
  "gandi-main": "gandiMain",
  "bfs-web": "bfsWeb",
  "community-web-cloud-database": "communityWebCloudDatabase",
  "op-parent-api": "opParentApi",
};

function runTypeDoc() {
  fs.mkdirSync(path.dirname(REFLECTION), { recursive: true });
  const tmpDocs = fs.mkdtempSync(path.join(os.tmpdir(), "ccw-typedoc-"));
  try {
    execFileSync(process.execPath, [TYPEDOC_BIN, "--json", REFLECTION, "--out", tmpDocs], {
      cwd: ROOT,
      stdio: ["ignore", "ignore", "pipe"],
    });
  } finally {
    fs.rmSync(tmpDocs, { recursive: true, force: true });
  }
}

function flattenType(node, depth = 0) {
  if (!node || depth > 8) return "unknown";
  switch (node.type) {
    case "intrinsic":
    case "literal":
      return node.name ?? String(node.value);
    case "reference":
      return node.name ?? String(node.target?.qualifiedName ?? node.target ?? "object");
    case "array":
      return `${flattenType(node.elementType, depth + 1)}[]`;
    case "union":
      return (node.types ?? []).map((t) => flattenType(t, depth + 1)).join(" | ");
    case "intersection":
      return (node.types ?? []).map((t) => flattenType(t, depth + 1)).join(" & ");
    case "tuple":
      return `[${(node.elements ?? []).map((t) => flattenType(t, depth + 1)).join(", ")}]`;
    case "reflection":
      return "object";
    case "typeOperator":
      return `${node.operator} ${flattenType(node.target, depth + 1)}`;
    case "indexedAccess":
      return `${flattenType(node.objectType, depth + 1)}[${flattenType(node.indexType, depth + 1)}]`;
    default:
      return node.type ?? "unknown";
  }
}

function textOf(node) {
  if (!node) return "";
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (typeof node === "string") return node;
  return textOf(node.text ?? node.content ?? "");
}

function commentOf(node, which = "summary") {
  const comment = node?.comment;
  if (!comment) return "";
  if (which === "returns") {
    const tag = comment.blockTags?.find((t) => t.tag === "@returns");
    return tag ? textOf(tag.content).trim() : "";
  }
  return textOf(comment.summary).trim();
}

function sourceOf(node) {
  const src = node?.sources?.[0];
  if (!src) return { file: "", line: 0 };
  return { file: src.fileName, line: src.line };
}

function scanSourceUrls() {
  const map = {};
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith(".")) walk(full);
        continue;
      }
      if (!entry.name.endsWith(".ts") || entry.name.endsWith(".test.ts")) continue;
      const relative = path.relative(path.join(ROOT, "src"), full).replace(/\\/g, "/");
      const service = relative.split("/")[0];
      if (!(service in SERVICE_EXPORTS)) continue;
      const source = fs.readFileSync(full, "utf8");
      const urlMatch = source.match(/export const url\s*=\s*["'`]([^"'`]+)["'`]/);
      if (!urlMatch) continue;
      const functions = [...source.matchAll(/export async function\s+(\w+)/g)].map(
        (m) => m[1],
      );
      map[service] ??= {};
      for (const fn of functions) {
        map[service][fn] ??= { url: urlMatch[1], file: `src/${relative}` };
      }
    }
  };
  walk(path.join(ROOT, "src"));
  return map;
}

runTypeDoc();

const reflection = JSON.parse(fs.readFileSync(REFLECTION, "utf8"));
const sourceMap = scanSourceUrls();
const apis = [];

for (const module of reflection.children ?? []) {
  const service = module.name;
  if (!(service in SERVICE_EXPORTS)) continue;
  const exportName = SERVICE_EXPORTS[service];

  for (const symbol of module.children ?? []) {
    if (symbol.name !== exportName) continue;
    const declaration = symbol.type?.declaration;
    for (const member of declaration?.children ?? []) {
      const signature = member.type?.declaration?.signatures?.[0];
      if (!signature) continue;

      const src = sourceOf(member);
      const impl = sourceMap[service]?.[member.name];
      const params = (signature.parameters ?? []).map((p) => ({
        name: p.name,
        type: flattenType(p.type),
        optional: Boolean(p.flags?.isOptional),
        description: commentOf(p),
      }));

      const returnTypeNode = signature.type?.typeArguments?.[0] ?? signature.type;
      apis.push({
        call: `${exportName}.${member.name}`,
        service,
        name: member.name,
        url: impl?.url ?? "",
        source: impl?.file ?? src.file,
        line: src.line,
        description: commentOf(signature),
        params,
        returns: {
          type: flattenType(returnTypeNode),
          description: commentOf(signature, "returns"),
        },
      });
    }
  }
}

apis.sort((a, b) => a.call.localeCompare(b.call));

const manifest = {
  $schema: "ai-api-manifest/v1",
  generatedAt: new Date().toISOString(),
  source: "TypeDoc reflection JSON (docs/typedoc-reflection.json)",
  note: "供 AI 检索的精简 API 清单。完整类型反射见 docs/typedoc-reflection.json；调用示例见 README.md。",
  services: Object.fromEntries(
    Object.entries(SERVICE_EXPORTS).map(([dir, name]) => [name, `src/${dir}`]),
  ),
  count: apis.length,
  apis,
};

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(
  `Generated api-manifest.json: ${apis.length} APIs, ${(fs.statSync(MANIFEST).size / 1024).toFixed(0)} KB`,
);
