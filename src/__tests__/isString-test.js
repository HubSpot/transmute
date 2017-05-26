import isString from "../isString";

describe("transmute/isString", () => {
  it("returns true if value is a String", () => {
    expect(isString("test")).toBe(true);
  });

  it("returns false if value is not a String", () => {
    expect(isString({})).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
  });
});
