import { getUserDashboardOverview } from "./overview";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get user dashboard overview", async () => {
  await testAuthReadApi(() => getUserDashboardOverview(), {
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
  });
});
