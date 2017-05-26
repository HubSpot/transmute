import both from "../both";

describe("transmute/both", () => {
  const gt0 = n => n > 0;
  const lt10 = n => n < 10;
  const between0and10 = both(gt0, lt10);

  it("returns false if first is false", () => {
    expect(between0and10(-10)).toBe(false);
  });

  it("returns false if second is false", () => {
    expect(between0and10(20)).toBe(false);
  });

  it("returns true if both first and second are true", () => {
    expect(between0and10(5)).toBe(true);
  });
});
