import { getNotificationV3Page } from "./page";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get notification v3 page should reject without login", async () => {
  await testAuthReadApi(() => getNotificationV3Page("CONTENT_INTERACTION"), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expectKeys(res, ["filter", "group", "hasMore", "items", "nextCursor", "readToken", "readTokenExpiresAt", "visibleAt"]);
      assert.strictEqual(res.group, "CONTENT_INTERACTION", "expected values to be strictly equal");
      assert.strictEqual(res.filter, "ALL", "expected values to be strictly equal");
      assert.strictEqual(Array.isArray(res.items), true, "expected values to be strictly equal");
      assert.strictEqual(typeof res.hasMore, "boolean", "expected value to be defined");
      res.items.forEach((item) => {
        expectKeys(item, ["id", "group", "contentCategory", "readState", "createdAt", "avatar", "actions", "target"]);
        assert.ok(item.id !== undefined, "expected value to be defined");
        assert.ok(item.createdAt !== undefined, "expected value to be defined");
      });
    },
  });
});

test("get notification v3 page with filter should return same group", async () => {
  await testAuthReadApi(() => getNotificationV3Page("CONTENT_INTERACTION", "LIKE"), {
    validateShape: (res) => {
      assert.strictEqual(res.filter, "LIKE", "expected values to be strictly equal");
      res.items.forEach((item) => {
        if (item.contentCategory !== undefined) {
          assert.ok(item.contentCategory.length > 0, "expected value to be defined");
        }
      });
    },
  });
});
