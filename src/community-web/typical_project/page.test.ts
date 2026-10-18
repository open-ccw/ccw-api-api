import { getTypicalProject } from "./page";
import { test, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("get typical project page returns PagesRes without token", async () => {
  const result = await getTypicalProject("63c2807d669fa967f17f5559");
  assert.ok(hasKeyPath(result, "data"), "expected property to exist");
  assert.ok(hasKeyPath(result, "page"), "expected property to exist");
  assert.ok(hasKeyPath(result, "perPage"), "expected property to exist");
  assert.ok(hasKeyPath(result, "totalNum"), "expected property to exist");
  assert.ok(hasKeyPath(result, "totalPages"), "expected property to exist");
  assert.strictEqual(Array.isArray(result.data), (true), "expected values to be strictly equal");
  assert.strictEqual(typeof result.totalNum, ("number"), "expected values to be strictly equal");
  assert.strictEqual(typeof result.totalPages, ("number"), "expected values to be strictly equal");
});
