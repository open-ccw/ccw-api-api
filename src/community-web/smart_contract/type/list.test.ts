import { getSmartContractTypeList } from "./list";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("list smart contract types", async () => {
  await testAuthReadApi(() => getSmartContractTypeList(), {
    validateShape: (res) => {
      assert.strictEqual(Array.isArray(res), true);
      if (res.length > 0) {
        assert.ok(res[0].title !== undefined);
        assert.ok(res[0].type !== undefined);
      }
    },
  });
});
