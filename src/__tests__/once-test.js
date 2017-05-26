import once from "../once";

describe("transmute/once", () => {
  it("only calls the function once", () => {
    const fn = jest.fn();
    const fnOnce = once(fn);
    fnOnce();
    fnOnce();
    fnOnce();
    expect(fn).toBeCalled();
    expect(fn.mock.calls.length).toBe(1);
  });

  it("only calls the function once even if it throws", () => {
    const fn = jest.fn(() => {
      throw new Error("test error");
    });
    const fnOnce = once(fn);
    expect(() => fnOnce()).toThrow();
    fnOnce();
    fnOnce();
    expect(fn).toBeCalled();
    expect(fn.mock.calls.length).toBe(1);
  });
});
