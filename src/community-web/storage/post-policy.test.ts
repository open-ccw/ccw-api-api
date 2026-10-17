import { getStoragePostPolicy } from "./post-policy";
import { test, testAuthWriteApi, expectKeys } from "src/testUtils";

test("get storage post policy", async () => {
  await testAuthWriteApi(
    () =>
      getStoragePostPolicy(
        "PROJECT_ASSET",
        "0d9f53f25aad33c6fb5fc98e03e97770.svg",
        "image/svg+xml",
        14866,
        "0d9f53f25aad33c6fb5fc98e03e97770",
        "6a894bdda3844117c1b255ee",
      ),
    {
      validateShape: (res) => {
        expectKeys(res, [
          "bucket",
          "expireAt",
          "fields",
          "forbidOverwrite",
          "objectKey",
          "objectPrefix",
          "provider",
          "resourceUrl",
          "reviewRequired",
          "reviewType",
          "url",
        ]);
      },
    },
  );
});