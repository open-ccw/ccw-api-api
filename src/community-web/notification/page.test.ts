import { getNotification } from "./page";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get notification page should reject without login", async () => {
  await testAuthReadApi(() => getNotification(), {
    validateShape: (res) => {
      expectKeys(res, ["data", "offset", "page", "perPage", "totalNum", "totalPages"]);
      assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
    },
  });
});
