import { getUserProducts, ProductCategory } from "./user_product";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("should fail without token for avatar frame products", async () => {
  await testAuthReadApi(
    () =>
      getUserProducts(ProductCategory.AVATAR_FRAME, {
        page: 1,
        perPage: 8,
        sortType: "DESC",
        sortField: "",
      }),
    {
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
