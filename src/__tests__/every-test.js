import { List } from "immutable";
import every from "../every";

describe("transmute/every", () => {
  const allEven = every(n => n % 2 === 0);

  it("returns true if all items match", () => {
    expect(allEven(List.of(2, 4, 6, 8))).toBe(true);
  });

  it("returns false if some items match", () => {
    expect(allEven(List.of(2, 3, 4))).toBe(false);
  });

  it("returns false if no items match", () => {
    expect(allEven(List.of(1, 3, 5))).toBe(false);
  });
});
