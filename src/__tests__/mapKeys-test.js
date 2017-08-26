import { List, Map, OrderedMap, Seq, Set } from "immutable";
import mapKeys from "../mapKeys";

describe("transmute/mapKeys", () => {
  const prependTest = mapKeys(key => `test-${key}`);

  it("passes the key, value, and iterable to keyMapper", () => {
    const iterable = Map({ one: 1 });
    const keyMapper = jest.fn();
    mapKeys(keyMapper, iterable);
    expect(keyMapper).toHaveBeenCalledWith("one", 1, iterable);
  });

  it("throws for non-Keyed Iterables", () => {
    expect(() => prependTest(List())).toThrow();
    expect(() => prependTest(Seq([]))).toThrow();
    expect(() => prependTest(Set())).toThrow();
  });

  it("maps Map keys", () => {
    const original = Map([[1, 1], [2, 2], [3, 3]]);
    expect(prependTest(original)).toMatchSnapshot();
  });

  it("maps Objects", () => {
    const original = { 1: 1, 2: 2, 3: 3 };
    expect(prependTest(original)).toMatchSnapshot();
  });

  it("maps OrderedMap keys", () => {
    const original = OrderedMap([[1, 1], [2, 2], [3, 3]]);
    expect(prependTest(original)).toMatchSnapshot();
  });
});
