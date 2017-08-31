import isObject from '../isObject';

describe('transmute/isObject', () => {
  it('returns true if value is a Object', () => {
    expect(isObject({ one: 1 })).toBe(true);
    expect(isObject([])).toBe(true);
  });

  it('returns false if value is not a Object', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject(null)).toBe(false);
  });
});
