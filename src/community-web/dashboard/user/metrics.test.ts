import { getUserDashboardMetrics } from "./metrics";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get user dashboard metrics", async () => {
  await testAuthReadApi(() => getUserDashboardMetrics(), {
    validateShape: (res) => {
      assert.strictEqual(Array.isArray(res), true);
    },
  });
});
