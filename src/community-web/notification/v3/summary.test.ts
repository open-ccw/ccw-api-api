import { getNotificationV3Summary } from "./summary";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get notification v3 summary should reject without login", async () => {
  await testAuthReadApi(() => getNotificationV3Summary(), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expectKeys(res, ["groups", "totalUnread", "visibleAt"]);
      assert.strictEqual(Array.isArray(res.groups), true, "expected values to be strictly equal");
      assert.strictEqual(typeof res.totalUnread, "number", "expected value to be defined");
      res.groups.forEach((g) => {
        expectKeys(g, ["group", "unreadCount", "preview"]);
        assert.ok(g.group !== undefined, "expected value to be defined");
        assert.strictEqual(typeof g.unreadCount, "number", "expected value to be defined");
        if (g.preview) {
          expectKeys(g.preview, ["createdAt", "id", "text"]);
        }
      });
    },
  });
});
