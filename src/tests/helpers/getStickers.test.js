import { getStickers } from "../../helpers/getStickers";

describe("tests on getStickers Function", () => {
  test("should return expected quantity", async () => {
    const searchQuery = "kimetsu no yaiba";
    const data = await getStickers(searchQuery);

    expect(data.length).toBe(15);
  });
});
