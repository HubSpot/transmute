import get from "../get";
import { fromJS, List, Map, OrderedMap, Seq, Set } from "immutable";
import indexBy from "../indexBy";
import map from "../map";
import mapKeys from "../mapKeys";
import pipe from "../pipe";
import toString from "../toString";

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

  it("maps ObjectSeq keys", () => {
    const original = Seq({ 1: 1, 2: 2, 3: 3 });
    expect(prependTest(original)).toMatchSnapshot();
  });

  it("transform an API response", () => {
    const indexWorkflows = pipe(
      Seq,
      indexBy(get("id")),
      mapKeys(toString),
      map(v => fromJS(v))
    );
    const original = [
      {
        id: 1,
        name: "test"
      },
      {
        id: 2,
        name: "test 2"
      }
    ];
    expect(indexWorkflows(original).toMap()).toMatchSnapshot();
  });
});
