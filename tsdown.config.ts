import { type UserConfig, defineConfig } from "tsdown/config";

const entries = {
  index: "src/index.ts",
  bfs: "src/bfs-web/index.ts",
  communityWeb: "src/community-web/index.ts",
  communityWebDB: "src/community-web-cloud-database/index.ts",
  gandiMain: "src/gandi-main/index.ts",
  opParent: "src/op-parent-api/index.ts",
  sso: "src/sso/index.ts",
};

export default defineConfig({
  entry: entries,
  format: {
    cjs: {
      outputOptions: {
        exports: "named",
      },
      platform: "neutral",
    },
    esm: {
      platform: "browser",
    },
    iife: {
      entry: { index: "src/index.ts" },
      deps: {
        alwaysBundle() {
          return true;
        },
        dts: {},
      },
      outputOptions: {
        exports: "named",
      },
      platform: "browser",
    },
  },
  outDir: "dist",
  globalName: "ccwApi",
  minify: true,
  clean: true,
  treeshake: true,
}) as UserConfig;
