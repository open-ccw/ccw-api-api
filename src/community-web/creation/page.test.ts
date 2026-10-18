import { getRemixedCreation } from "./page";
import { getExcellentCreations } from "./excellent/list";
import { test, beforeAll } from "src/testUtils";
import assert from "node:assert/strict";

let sampleCreationOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleCreationOid = creations[0].oid;
  }
}, 30000);

test("get creation page should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getRemixedCreation([sampleCreationOid]);
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
});
