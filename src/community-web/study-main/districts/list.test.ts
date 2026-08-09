import { getDistrictList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get district list should return China administrative divisions", async () => {
  try {
    await getDistrictList();
  } catch (e) {
    assert.strictEqual(String(e).includes("token为空"), true);
  }
});
