import { resolveExternalIp } from "./resolve";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("resolve external ip should return geo info", async () => {
  const res = await resolveExternalIp();
  assert.strictEqual(typeof res.area, ("string"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.city, ("string"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.country, ("string"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.isp, ("string"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.province, ("string"), "expected values to be strictly equal");
});
