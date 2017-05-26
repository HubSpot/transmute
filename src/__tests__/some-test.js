import { List } from "immutable";
import some from "../some";

describe("transmute/some", () => {
  const anyEven = some(n => n % 2 === 0);

  it("returns true if all items match", () => {
    expect(anyEven(List.of(2, 4, 6, 8))).toBe(true);
  });

  it("returns true if some items match", () => {
    expect(anyEven(List.of(2, 3, 4))).toBe(true);
  });

  it("returns false if no items match", () => {
    expect(anyEven(List.of(1, 3, 5))).toBe(false);
  });
});
