import isFunction from "../isFunction";

describe("transmute/isFunction", () => {
  it("returns true if value is a function", () => {
    expect(isFunction(() => {})).toBe(true);
  });

  it("returns false if value is not a function", () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(9)).toBe(false);
  });
});
