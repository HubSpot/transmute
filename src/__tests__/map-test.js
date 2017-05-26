import { List, Map } from "immutable";
import map from "../map";

describe("transmute/map", () => {
  const mapper = map(n => n + 1);

  it("maps a List", () => {
    expect(mapper(List.of(1, 2, 3))).toMatchSnapshot();
  });

  it("maps a Map", () => {
    expect(mapper(Map.of("one", 1, "two", 2, "three", 3))).toMatchSnapshot();
  });
});
