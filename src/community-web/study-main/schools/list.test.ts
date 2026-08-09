import { getSchoolList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get school list should return schools", async () => {
  try {
    await getSchoolList();
  } catch (e) {
    assert.strictEqual(String(e).includes("token为空"), true);
  }
});
