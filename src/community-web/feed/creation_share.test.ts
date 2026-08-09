import { shareCreation } from "./creation_share";
import { test, testAuthWriteApi } from "src/testUtils";

test("share creation to feed", async () => {
  await testAuthWriteApi(() => shareCreation("69740f1a61b891733d5ee2c6"));
});
