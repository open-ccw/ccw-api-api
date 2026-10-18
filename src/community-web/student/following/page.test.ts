import { getStudentFollowing } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get student following page should fail without token", async () => {
  const data = await getStudentFollowing("63c2807d669fa967f17f5559");
  assert.ok(Boolean(Array.isArray(data.data)), "expected value to be truthy");
  assert.ok(((data.data[0]) !== undefined), "expected value to be defined");
});
