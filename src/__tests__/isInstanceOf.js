import isInstanceOf from "../isInstanceOf";

describe("transmute/isInstanceOf", () => {
  class TestClass {}
  const isTestClass = isInstanceOf(TestClass);

  it("returns true if value is an instanceof Constructor", () => {
    expect(isTestClass(new TestClass())).toBe(true);
  });

  it("returns false if value isnt an instanceof Constructor", () => {
    expect(isTestClass({})).toBe(false);
    expect(isTestClass(new Date())).toBe(false);
  });
});
