import always from "../always";

describe("always", () => {
  it("returns a function", () => {
    expect(typeof always("test")).toBe("function");
  });

  it("the created function always returns the same value", () => {
    const alwaysBlue = always("blue");
    expect(alwaysBlue()).toBe("blue");
    expect(alwaysBlue({})).toBe("blue");
    expect(alwaysBlue(1, 2, 3)).toBe("blue");
    expect(alwaysBlue("wowowow")).toBe("blue");
  });
});
