import { getCreationDashboardOverview } from "./overview";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get creation dashboard overview", async () => {
  await testAuthReadApi(
    () => getCreationDashboardOverview("69740f1a61b891733d5ee2c6"),
    {
      validateShape: (res) => {
        expectKeys(res, [
          "commentCount",
          "commentCountGrowth",
          "favoriteCount",
          "favoriteCountGrowth",
          "income",
          "incomeGrowth",
          "playCount",
          "playCountGrowth",
          "playTime",
          "playTimeGrowth",
          "shareCount",
          "shareCountGrowth",
        ]);
      },
    },
  );
});
