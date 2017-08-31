import isNumber from '../isNumber';

describe('transmute/isNumber', () => {
  it('returns true if value is a number', () => {
    expect(isNumber(10)).toBe(true);
  });

  it('returns false if value is a NaN', () => {
    expect(isNumber(NaN)).toBe(false);
  });

  it('returns false if value is not a number', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(new Date())).toBe(false);
  });
});
