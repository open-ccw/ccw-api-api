import { searchStudents } from "./search";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("search students", async () => {
  await testAuthReadApi(() => searchStudents("aaa"), {
    validateShape: (res) => {
      expectKeys(res, ["data", "page", "perPage", "totalNum", "totalPages"]);
      assert.strictEqual(Array.isArray(res.data), true);
    },
  });
});
