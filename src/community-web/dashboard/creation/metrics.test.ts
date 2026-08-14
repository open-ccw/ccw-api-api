import { getCreationDashboardMetrics } from "./metrics";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get creation dashboard metrics", async () => {
  await testAuthReadApi(
    () => getCreationDashboardMetrics("69740f1a61b891733d5ee2c6"),
    {
      validateShape: (res) => {
        assert.strictEqual(Array.isArray(res), true);
      },
    },
  );
});
