import _setArity from "../_setArity";

describe("transmute/internal/_setArity", () => {
  it("throws if arity is less than 0", () => {
    expect(() => _setArity(-1, () => {})).toThrow();
    expect(() => _setArity(0, () => {})).not.toThrow();
  });

  it("throws if arity is greater than 9", () => {
    expect(() => _setArity(10, () => {})).toThrow();
    expect(() => _setArity(9, () => {})).not.toThrow();
  });

  it("sets the correct arity", () => {
    for (let arity = 0; arity <= 9; arity++) {
      expect(_setArity(arity, () => {}).length).toBe(arity);
    }
  });

  it("correctly runs operation", () => {
    const operation = jest.fn((...args) => args.reduce((sum, n) => sum + n));
    const operationWithArity = _setArity(3, operation);
    expect(operationWithArity(1, 2, 3)).toBe(6);
    expect(operation).toHaveBeenCalledWith(1, 2, 3);
  });
});
