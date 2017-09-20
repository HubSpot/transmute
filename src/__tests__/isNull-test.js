'use es6';
/* eslint-env jasmine */
import isNull from '../isNull';

describe('transmute/isNull', () => {
  it('returns true if subject is undefined', () => {
    expect(isNull(null)).toBe(true);
  });

  it('returns false if subject isnt undefined', () => {
    expect(isNull('test')).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull({})).toBe(false);
  });
});
