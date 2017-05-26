import fromJS from "../fromJS";
import { List } from "immutable";
import map from "../map";

describe("transmute/fromJS", () => {
  it("converts json to Immutable", () => {
    expect(fromJS({ nums: [1, 2, 3] })).toMatchSnapshot();
  });

  it("works with `map`", () => {
    const original = List.of({ one: 1 }, { two: 2 }, { three: 3 });
    expect(map(fromJS, original)).toMatchSnapshot();
  });
});
