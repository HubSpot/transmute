import isArray from "../isArray";

describe("transmute/isArray", () => {
  it("returns true if value is a Array", () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it("returns false if value is not a Array", () => {
    expect(isArray({})).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(null)).toBe(false);
  });
});
