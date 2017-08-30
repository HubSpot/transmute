import curryN from "../curryN";
import isFunction from "../isFunction";

function noArgs() {
  return "testing";
}

const baseToArray = (a, b, c, ...rest) => [a, b, c, ...rest];
const toArray = curryN(3, baseToArray);

describe("transmute/curryN", () => {
  it("throws if operation is not a function", () => {
    expect(() => curryN(1, null)).toThrow();
    expect(() => curryN(1, a => a)).not.toThrow();
  });

  it("throws if arity is below the limit", () => {
    expect(() => curryN(-10, () => {})).toThrow();
    expect(() => curryN(0, () => {})).not.toThrow();
  });

  it("it's curried", () => {
    expect(curryN(1)(a => a)(1)).toEqual(1);
  });

  it("throws if arity is above the limit", () => {
    expect(() => curryN(10, () => {})).toThrow();
    expect(() => curryN(9, () => {})).not.toThrow();
  });

  it("returns a curried fn if no args but an arity is specified", () => {
    const curried = curryN(2, noArgs);
    expect(isFunction(curried())).toEqual(true);
    expect(isFunction(curried(1))).toEqual(true);
    expect(curried(1, 2)).toEqual("testing");
  });

  it("curries according to the fn's arity", () => {
    const result = [1, 2, 3];
    expect(toArray(1)(2)(3)).toEqual(result);
    expect(toArray(1, 2)(3)).toEqual(result);
    expect(toArray(1)(2, 3)).toEqual(result);
    expect(toArray(1, 2, 3)).toEqual(result);
  });

  it("passes through extra args", () => {
    expect(toArray(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("sets the original function on `fn.operation`", () => {
    expect(toArray.operation).toBe(baseToArray);
    expect(toArray(1).operation).toBe(baseToArray);
    expect(toArray(1)(2).operation).toBe(baseToArray);
    expect(toArray(1, 2).operation).toBe(baseToArray);
  });

  it("sets the received arguments on `fn.args`", () => {
    expect(toArray.args).toEqual([]);
    expect(toArray(1).args).toEqual([1]);
    expect(toArray(1)(2).args).toEqual([1, 2]);
    expect(toArray(1, 2).args).toEqual([1, 2]);
  });
});
