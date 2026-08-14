import { investSmartContract } from "./invest";
import { test, testAuthWriteApi } from "src/testUtils";

test("invest smart contract", async () => {
  await testAuthWriteApi(
    () => investSmartContract(2039166119812098, 1),
    {},
  );
});
