import throttle from '../throttle';

describe('transmute/throttle', () => {
  const now = Date.now;

  afterAll(() => {
    Date.now = now;
  });

  const throttle100 = throttle(100);

  it('throws if operation is not a function', () => {
    expect(() => throttle(100, {})).toThrow();
    expect(() => throttle(100, () => {})).not.toThrow();
  });

  it('throws if interval is not a number', () => {
    expect(() => throttle('100', () => {})).toThrow();
    expect(() => throttle(100, () => {})).not.toThrow();
  });

  it('runs immediately', () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    expect(fn).toBeCalled();
  });

  it('runs after the interval if called again', () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    tfn();
    expect(fn.mock.calls.length).toBe(1);
    jest.runTimersToTime(100);
    expect(fn.mock.calls.length).toBe(2);
  });

  it('returns the most recent result', () => {
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

  it('cancels delayed calls when .cancel is called', () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    tfn();
    expect(fn.mock.calls.length).toBe(1);
    tfn.cancel();
    jest.runTimersToTime(100);
    expect(fn.mock.calls.length).toBe(1);
  });

  it('only has one delayed call at a time', () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    tfn();
    tfn();
    tfn();
    jest.runTimersToTime(100);
    expect(fn.mock.calls.length).toBe(2);
  });

  it('cancels delayed call in favor of immediate call', () => {
    const fn = jest.fn();
    const tfn = throttle100(fn);
    Date.now = () => 10000;
    tfn();
    Date.now = () => 10050;
    jest.runTimersToTime(50);
    tfn();
    jest.runTimersToTime(50);
    Date.now = () => 10100;
    tfn();
    expect(fn.mock.calls.length).toBe(2);
  });
});
