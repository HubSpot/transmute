import { Map } from "immutable";
import keySeq from "../keySeq";

describe("transmute/keySeq", () => {
  it("gets the keys from an Array", () => {
    expect(keySeq([1, 2, 3])).toMatchSnapshot();
  });

  it("gets the keys from a Map", () => {
    expect(keySeq(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });

  it("gets the keys from an Object", () => {
    expect(keySeq({ one: 1, two: 2, three: 3 })).toMatchSnapshot();
  });
});
