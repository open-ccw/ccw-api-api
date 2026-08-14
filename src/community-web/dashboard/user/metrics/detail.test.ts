import { getUserDashboardMetricsDetail } from "./detail";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get user dashboard metrics detail", async () => {
  await testAuthReadApi(() => getUserDashboardMetricsDetail("PLAY_COUNT"), {
    validateShape: (res) => {
      assert.strictEqual(Array.isArray(res), true);
    },
  });
});
