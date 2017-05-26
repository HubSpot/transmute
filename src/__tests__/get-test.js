import get from "../get";
import { List, Map } from "immutable";

describe("transmute/get", () => {
  it("gets a property from a List", () => {
    expect(get(1, List.of(1, 2, 3))).toEqual(2);
  });

  it("gets a property from a Map", () => {
    expect(get("two", Map.of("one", 1, "two", 2, "three", 3))).toEqual(2);
  });

  it("gets a property from an Object", () => {
    expect(get("two", { one: 1, two: 2, three: 3 })).toEqual(2);
  });
});
