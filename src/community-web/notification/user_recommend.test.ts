import { recommendUser } from "./user_recommend";
import { test, testAuthWriteApi } from "src/testUtils";

test("recommend user to friend", async () => {
  await testAuthWriteApi(() =>
    recommendUser(
      "65a90609a65f1229b0d6ab27",
      "63c2807d669fa967f17f5559",
    ),
  );
});
