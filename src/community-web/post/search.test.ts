import { searchPosts } from "./search";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("search posts", async () => {
  await testAuthReadApi(() => searchPosts("aaa"), {
    validateShape: (res) => {
      expectKeys(res, ["data", "page", "perPage", "totalNum", "totalPages"]);
      assert.strictEqual(Array.isArray(res.data), true);
    },
  });
});