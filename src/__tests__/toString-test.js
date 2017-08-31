import { List } from 'immutable';
import toString from '../toString';

describe('transmute/toString', () => {
  it('returns "null" for null', () => {
    expect(toString(null)).toBe('null');
  });

  it('returns "undefined" for undefined', () => {
    expect(toString(undefined)).toBe('undefined');
  });

  it('properly toStrings primatives', () => {
    expect(toString('test')).toBe('test');
    expect(toString(123)).toBe('123');
    expect(toString(123.456)).toBe('123.456');
    expect(toString(true)).toBe('true');
  });

  it('properly toStrings arrays', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  it('properly toStrings objects', () => {
    expect(toString({})).toBe('[object Object]');
  });

  it('properly toStrings Immutables', () => {
    expect(toString(List())).toBe(List().toString());
  });
});
