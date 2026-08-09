import { shareFriendInvite } from "./friend_invite";
import { test, testAuthWriteApi } from "src/testUtils";

test("share friend invite to feed", async () => {
  await testAuthWriteApi(() => shareFriendInvite("description"));
});
