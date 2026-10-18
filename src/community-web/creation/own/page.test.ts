import { getOwnCreation } from "./page";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get own creation page should fail without token", async () => {
  await testAuthReadApi(() => getOwnCreation(), {
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
  });
});
