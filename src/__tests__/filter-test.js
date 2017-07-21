import filter from "../filter";
import { List, Map } from "immutable";

describe("transmute/filter", () => {
  const takeEven = filter(n => n % 2 === 0);

  it("filters Arrays", () => {
    expect(takeEven([1, 2, 3])).toMatchSnapshot();
  });

  it("filters Lists", () => {
    expect(takeEven(List.of(1, 2, 3))).toMatchSnapshot();
  });

  it("filters Maps", () => {
    expect(takeEven(Map.of("one", 1, "two", 2, "three", 3))).toMatchSnapshot();
  });

  it("filters Objects", () => {
    expect(takeEven({ one: 1, two: 2, three: 3 })).toMatchSnapshot();
  });
});
