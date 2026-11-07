import { getCommentContext } from "./context";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get comment context should return data", async () => {
  const subjectOid = "68dd004586bbc77f84e309ac";
  const commentId = 10229116;
  const res = await getCommentContext(subjectOid, "PROFILE", "COMMENT", commentId);

  assert.strictEqual(res.anchor.commentId, commentId, "expected values to be strictly equal");
  assert.strictEqual(res.subjectOid, subjectOid, "expected values to be strictly equal");
  assert.ok(Array.isArray(res.floors), "expected values to be strictly equal");
  assert.ok(typeof res.total === "number", "expected value to be defined");
  assert.ok(typeof res.floorCursor.next === "string" || res.floorCursor.next === null, "expected value to be defined");
  assert.ok(typeof res.replies.total === "number", "expected value to be defined");
  assert.ok(Array.isArray(res.replies.window), "expected values to be strictly equal");
  res.floors.forEach((floor) => {
    assert.ok(floor.id !== undefined, "expected value to be defined");
    assert.ok(floor.commenter.accountOid !== undefined, "expected value to be defined");
  });
});
