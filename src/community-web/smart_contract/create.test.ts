import { createSmartContract } from "./create";
import { test, testAuthWriteApi } from "src/testUtils";

test("create smart contract", async () => {
  await testAuthWriteApi(
    () =>
      createSmartContract(
        "6a7e8b8b91223874330c4d8f",
        "通用合约",
        "GENERAL",
      ),
    {},
  );
});
