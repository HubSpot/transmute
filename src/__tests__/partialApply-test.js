import { List, Map, OrderedMap, Seq, Set } from "immutable";
import partialApply from "../partialApply";

describe("transmute/partialApply", () => {
  const argsToArray = (a, b, c) => [a, b, c];
  const bindArgs = partialApply(argsToArray);

  it("throws if `operation` isnt a function", () => {
    expect(() => partialApply(null)([])).toThrow();
    expect(() => partialApply(() => {})([])).not.toThrow();
  });

  it("throws if args is an unordered iterable", () => {
    expect(() => bindArgs(undefined)).toThrow();
    expect(() => bindArgs(Map())).toThrow();
    expect(() => bindArgs(Set())).toThrow();
    expect(() => bindArgs(Seq.Set())).toThrow();
  });

  it("binds arrays of args", () => {
    expect(bindArgs([1, 2])(3)).toEqual([1, 2, 3]);
  });

  it("binds Lists of args", () => {
    expect(bindArgs(List.of(1, 2))(3)).toEqual([1, 2, 3]);
  });

  it("binds OrderedMaps of args", () => {
    expect(bindArgs(OrderedMap({ one: 1, two: 2, three: 3 }))()).toEqual([
      1,
      2,
      3
    ]);
  });

  it("binds Seq of args", () => {
    expect(bindArgs(Seq.of(1, 2))(3)).toEqual([1, 2, 3]);
  });
});
