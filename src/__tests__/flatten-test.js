import flatten from "../flatten";
import { List, Seq } from "immutable";

describe("transmute/flatten", () => {
  it("deeply flattens Lists", () => {
    expect(
      flatten(List.of(List.of(1, List.of(2, 3)), List.of(4, 5, 6)))
    ).toMatchSnapshot();
  });

  it("deeply flattens Seq", () => {
    expect(
      flatten(Seq.of(Seq.of(1, Seq.of(2, 3)), Seq.of(4, 5, 6)))
    ).toMatchSnapshot();
  });
});
