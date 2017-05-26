import { List, Map } from "immutable";
import toJS from "../toJS";

describe("transmute/toJS", () => {
  it("just returns if subject is already JS", () => {
    expect(toJS(null)).toBe(null);
    expect(toJS(undefined)).toBe(undefined);
    expect(toJS({})).toEqual({});
    expect(toJS([])).toEqual([]);
  });

  it("converts a List to JS", () => {
    expect(toJS(List.of(1, 2, 3))).toEqual([1, 2, 3]);
  });

  it("converts a Map to JS", () => {
    expect(toJS(Map.of("one", 1, "two", 2, "three", 3))).toEqual({
      one: 1,
      two: 2,
      three: 3
    });
  });
});
