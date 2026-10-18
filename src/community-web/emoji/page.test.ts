import { getEmoji } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get emoji page should return data", async () => {
  const res = await getEmoji("PUBLISHED", { perPage: 5 });
  assert.ok(((res.data) !== undefined), "expected value to be defined");
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  assert.ok(((res.totalNum) !== undefined), "expected value to be defined");
  assert.ok(((res.totalPages) !== undefined), "expected value to be defined");
  if (res.data.length > 0) {
    assert.ok(((res.data[0].id) !== undefined), "expected value to be defined");
    assert.ok(((res.data[0].name) !== undefined), "expected value to be defined");
  }
});
