import { searchHashTags } from "./v2";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("search hash tags", async () => {
  await testAuthReadApi(() => searchHashTags("aaa"), {
    validateShape: (res) => {
      expectKeys(res, ["data", "page", "perPage", "totalNum", "totalPages"]);
      assert.strictEqual(Array.isArray(res.data), true);
    },
  });
});
