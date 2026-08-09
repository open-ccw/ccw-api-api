import { shareCreationToFriend } from "./creation_share";
import { test, testAuthWriteApi } from "src/testUtils";

test("share creation to friend", async () => {
  await testAuthWriteApi(() =>
    shareCreationToFriend(
      "69740f1a61b891733d5ee2c6",
      "66bee08e19f4df62e807a694",
    ),
  );
});
