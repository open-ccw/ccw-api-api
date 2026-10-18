import { getCreationScreenshot } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get creation screenshot page should return data", async () => {
  const res = await getCreationScreenshot(CREATION_OID, { perPage: 5 });
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  if (res.data.length > 0) {
    assert.ok(((res.data[0].creationScreenshot) !== undefined), "expected value to be defined");
    assert.ok(((res.data[0].commenter) !== undefined), "expected value to be defined");
    assert.ok(((res.data[0].topicId) !== undefined), "expected value to be defined");
  }
});
