import { getTeamworkLog } from "./page";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get teamwork log page should fail without token", async () => {
  await testAuthReadApi(
    () => getTeamworkLog("63c2807d669fa967f17f5559", ["BLOCK"]),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        expectKeys(res, [
          "data",
          "offset",
          "page",
          "perPage",
          "totalNum",
          "totalPages",
        ]);
      },
    },
  );
});
