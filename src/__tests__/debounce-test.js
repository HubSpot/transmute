import debounce from '../debounce';

describe('transmute/debounce', () => {
  const debounce100 = debounce(100);

  it('throws if operation is not a function', () => {
    expect(() => debounce(100, {})).toThrow();
    expect(() => debounce(100, () => {})).not.toThrow();
  });

  it('throws if interval is not a number', () => {
    expect(() => debounce('100', () => {})).toThrow();
    expect(() => debounce(100, () => {})).not.toThrow();
  });

  it('runs after interval milliseconds', () => {
    const fn = jest.fn();
    const dfn = debounce100(fn);
    dfn();
    expect(fn).not.toBeCalled();
    jest.runTimersToTime(50);
    expect(fn).not.toBeCalled();
    jest.runTimersToTime(50);
    expect(fn).toBeCalled();
  });

  it('restarts the interval if the fn is called again', () => {
    const fn = jest.fn();
    const dfn = debounce100(fn);
    dfn();
    jest.runTimersToTime(50);
    expect(fn).not.toBeCalled();
    dfn();
    jest.runTimersToTime(50);
    expect(fn).not.toBeCalled();
    dfn();
    jest.runTimersToTime(50);
    expect(fn).not.toBeCalled();
    jest.runTimersToTime(50);
    expect(fn).toBeCalled();
  });

  it('returns the most recent result', () => {
    let calls = 0;
    const fn = () => ++calls;
    const dfn = debounce100(fn);
    expect(dfn()).toBe(undefined);
    jest.runTimersToTime(100);
    expect(dfn()).toBe(1);
    jest.runTimersToTime(100);
    expect(dfn()).toBe(2);
  });

  it('cancels delayed calls when .cancel is called', () => {
    const fn = jest.fn();
    const dfn = debounce100(fn);
    dfn();
    jest.runTimersToTime(50);
    dfn.cancel();
    jest.runTimersToTime(100);
    expect(fn).not.toBeCalled();
  });
});
