import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST = path.join(ROOT, "api-manifest.json");

const args = process.argv.slice(2);
if (!fs.existsSync(MANIFEST)) {
  console.error("api-manifest.json 不存在，请先运行 npm run manifest");
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
let apis = manifest.apis;

const serviceArg = args.find((a) => a.startsWith("--service="))?.split("=")[1];
if (serviceArg) {
  apis = apis.filter((a) => a.service.includes(serviceArg.toLowerCase()));
}

const terms = args.filter((a) => !a.startsWith("--"));
if (terms.length) {
  const lower = terms.map((t) => t.toLowerCase());
  apis = apis.filter((a) =>
    lower.every(
      (t) =>
        a.call.toLowerCase().includes(t) ||
        a.url.toLowerCase().includes(t) ||
        a.description.toLowerCase().includes(t) ||
        a.source.toLowerCase().includes(t) ||
        a.params.some((p) => p.name.toLowerCase().includes(t)),
    ),
  );
}

const compact = args.includes("--compact");
if (compact) {
  apis = apis.map((a) => ({
    call: a.call,
    url: a.url,
    description: a.description,
    params: a.params.map((p) => `${p.name}: ${p.type}`),
    returns: a.returns.type,
    source: a.source,
  }));
}

console.log(JSON.stringify({ count: apis.length, apis }, null, 2));
