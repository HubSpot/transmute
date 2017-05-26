import { Map } from "immutable";
import merge from "../merge";

describe("transmute/merge", () => {
  it("merges an Object", () => {
    const merger = merge({ one: 3, three: 1 });
    expect(
      merger(
        Map({
          one: 1,
          two: 2,
          three: 3
        })
      )
    ).toMatchSnapshot();
  });

  it("merges a Map", () => {
    const merger = merge(Map({ one: 3, three: 1 }));
    expect(
      merger(
        Map({
          one: 1,
          two: 2,
          three: 3
        })
      )
    ).toMatchSnapshot();
  });
});
