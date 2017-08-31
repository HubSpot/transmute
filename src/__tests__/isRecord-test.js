import { List, Map, Record, Seq, Set } from 'immutable';
import isRecord from '../isRecord';

describe('transmute/isRecord', () => {
  it('returns true if subject is a Record', () => {
    const TestRecord = Record({ one: 1 });
    expect(isRecord(TestRecord())).toBe(true);
  });

  it('returns false for everything else', () => {
    expect(isRecord('test')).toBe(false);
    expect(isRecord({})).toBe(false);
    expect(isRecord([])).toBe(false);
    expect(isRecord(List())).toBe(false);
    expect(isRecord(Map())).toBe(false);
    expect(isRecord(Seq())).toBe(false);
    expect(isRecord(Set())).toBe(false);
  });
});
