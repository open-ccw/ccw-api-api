import { getSmartContractEarningsPage } from "./page";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get smart contract earnings page", async () => {
  await testAuthReadApi(
    () => getSmartContractEarningsPage([2039166119812098]),
    {
      validateShape: (res) => {
        expectKeys(res, ["data", "page", "perPage", "totalNum", "totalPages"]);
        assert.strictEqual(Array.isArray(res.data), true);
      },
    },
  );
});
