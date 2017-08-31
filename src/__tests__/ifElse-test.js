import ifElse from '../ifElse';

describe('transmute/ifElse', () => {
  const incrementAwayFromZero = ifElse(n => n >= 0, n => n + 1, n => n - 1);

  it('runs `affimative` if condition is truthy', () => {
    expect(incrementAwayFromZero(1)).toBe(2);
  });

  it('runs `negative` if predicate(subject) is falsy', () => {
    expect(incrementAwayFromZero(-1)).toBe(-2);
  });
});
