import debounceImmediate from "../debounceImmediate";

jest.useFakeTimers();

describe("transmute/debounceImmediate", () => {
  const debounceImmediate100 = debounceImmediate(100);

  it("throws if operation is not a function", () => {
    expect(() => debounceImmediate(100, {})).toThrow();
    expect(() => debounceImmediate(100, () => {})).not.toThrow();
  });

  it("throws if interval is not a number", () => {
    expect(() => debounceImmediate("100", () => {})).toThrow();
    expect(() => debounceImmediate(100, () => {})).not.toThrow();
  });

  it("runs immediately", () => {
    const fn = jest.fn();
    const dfn = debounceImmediate100(fn);
    dfn();
    expect(fn).toBeCalled();
  });

  it("restarts the interval if the fn is called again", () => {
    const fn = jest.fn();
    const dfn = debounceImmediate100(fn);
    dfn();
    jest.runTimersToTime(50);
    expect(fn.mock.calls.length).toBe(1);
    dfn();
    jest.runTimersToTime(50);
    expect(fn.mock.calls.length).toBe(1);
    dfn();
    jest.runTimersToTime(50);
    expect(fn.mock.calls.length).toBe(1);
    jest.runTimersToTime(50);
    expect(fn.mock.calls.length).toBe(2);
  });

  it("returns the most recent result", () => {
    let calls = 0;
    const fn = () => ++calls;
    const dfn = debounceImmediate100(fn);
    expect(dfn()).toBe(1);
    expect(dfn()).toBe(1);
    jest.runTimersToTime(100);
    expect(dfn()).toBe(2);
    jest.runTimersToTime(100);
    expect(dfn()).toBe(3);
    dfn.cancel();
  });

  it("cancels delayed calls when .cancel is called", () => {
    const fn = jest.fn();
    const dfn = debounceImmediate100(fn);
    dfn();
    dfn();
    dfn.cancel();
    expect(fn.mock.calls.length).toBe(1);
    jest.runTimersToTime(100);
    expect(fn.mock.calls.length).toBe(1);
  });
});
