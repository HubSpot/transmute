import { List } from "immutable";
import without from "../without";

describe("transmute/without", () => {
  it("drops unwanted values", () => {
    expect(
      without(["one", "three"], List.of("one", "two", "three"))
    ).toMatchSnapshot();
  });
});
