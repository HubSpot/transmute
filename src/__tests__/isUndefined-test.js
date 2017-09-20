import isUndefined from '../isUndefined';

describe('transmute/isUndefined', () => {
  it('returns true if subject is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('returns false if subject isnt undefined', () => {
    expect(isUndefined('test')).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined({})).toBe(false);
  });
});
