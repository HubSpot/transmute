import { Map } from "immutable";
import entrySeq from "../entrySeq";

describe("transmute/entrySeq", () => {
  it("gets the values from a Map", () => {
    const entries = entrySeq(Map({ one: 1, two: 2, three: 3 }));
    expect(entries).toMatchSnapshot();
  });

  it("gets the entries from an Object", () => {
    const res = entrySeq({ one: 1, two: 2, three: 3 });
    expect(res).toMatchSnapshot();
  });
});
