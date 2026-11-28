import { markNotificationV3Read } from "./mark_read";
import { test, testAuthWriteApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("mark notification v3 read", async () => {
  await testAuthWriteApi(
    () =>
      markNotificationV3Read(
        "ALL",
        "v1.1795840325265.pKUtEhvqpq9ojoCc1v-sGVVqfAKAoBzdDx5FlMaeHio.d20RJP7ipQkrlLk47JURcJ7YDoWp_MWAvDF6qgXw_2k",
      ),
    {
      validateShape: (res) => {
        expectKeys(res, [
          "retryAfterMs",
          "changedCount",
          "summaryInvalidated",
          "completed",
        ]);
        assert.strictEqual(typeof res.retryAfterMs, "number");
        assert.strictEqual(typeof res.changedCount, "number");
        assert.strictEqual(typeof res.summaryInvalidated, "boolean");
        assert.strictEqual(typeof res.completed, "boolean");
      },
    },
  );
});
