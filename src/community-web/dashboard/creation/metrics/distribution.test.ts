import { getCreationDashboardMetricsDistribution } from "./distribution";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get creation dashboard metrics distribution", async () => {
  await testAuthReadApi(
    () => getCreationDashboardMetricsDistribution("69740f1a61b891733d5ee2c6"),
    {
      validateShape: (res) => {
        expectKeys(res, ["playCountDistribution", "playTimeDistribution"]);
      },
    },
  );
});
