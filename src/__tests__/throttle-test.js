import throttle from "../throttle";

jest.useFakeTimers();

describe("transmute/throttle", () => {
  const throttle100 = throttle(100);

  it("throws if operation is not a function", () => {
    expect(() => throttle(100, {})).toThrow();
    expect(() => throttle(100, () => {})).not.toThrow();
  });

  it("throws if interval is not a number", () => {
    expect(() => throttle("100", () => {})).toThrow();
    expect(() => throttle(100, () => {})).not.toThrow();
  });

  it("runs immediately", () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    expect(fn).toBeCalled();
  });

  it("runs after the interval if called again", () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    tfn();
    expect(fn.mock.calls.length).toBe(1);
    jest.runTimersToTime(100);
    expect(fn.mock.calls.length).toBe(2);
  });

  it("returns the most recent result", () => {
    let calls = 0;
    const fn = () => ++calls;
    const tfn = throttle100(fn);
    expect(tfn()).toBe(1);
    expect(tfn()).toBe(1);
    jest.runTimersToTime(100);
    expect(tfn()).toBe(2);
    jest.runTimersToTime(100);
    expect(tfn()).toBe(3);
  });

  it("cancels delayed calls when .cancel is called", () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    tfn();
    expect(fn.mock.calls.length).toBe(1);
    tfn.cancel();
    jest.runTimersToTime(100);
    expect(fn.mock.calls.length).toBe(1);
  });
});
