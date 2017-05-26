import flattenN from "../flattenN";
import { List, Seq } from "immutable";

describe("transmute/flattenN", () => {
  it("flattens Lists to depth", () => {
    expect(
      flattenN(1, List.of(List.of(1, List.of(2, 3)), List.of(4, 5, 6)))
    ).toMatchSnapshot();
  });

  it("flattens Seqs to depth", () => {
    expect(
      flattenN(1, Seq.of(Seq.of(1, Seq.of(2, 3)), Seq.of(4, 5, 6)))
    ).toMatchSnapshot();
  });
});
