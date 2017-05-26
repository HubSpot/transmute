import filterNot from "../filterNot";
import { List, Map } from "immutable";

describe("transmute/filterNot", () => {
  const takeOdd = filterNot(n => n % 2 === 0);

  it("filterNots Lists", () => {
    expect(takeOdd(List.of(1, 2, 3))).toMatchSnapshot();
  });

  it("filterNots Maps", () => {
    expect(takeOdd(Map.of("one", 1, "two", 2, "three", 3))).toMatchSnapshot();
  });
});
