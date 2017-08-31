import clear from '../clear';
import { List, Map, Record, Seq, Set } from 'immutable';

describe('transmute/clear', () => {
  it('clears an Array', () => {
    expect(clear([1, 2, 3])).toEqual([]);
  });

  it('clears a List', () => {
    expect(clear(List.of(1, 2, 3))).toEqual(List());
  });

  it('clears a Map', () => {
    expect(clear(Map({ one: 1, two: 2, three: 3 }))).toEqual(Map());
  });

  it('clears an Object', () => {
    expect(clear({ one: 1, two: 2, three: 3 })).toEqual({});
  });

  it('clears a Record to into a Map', () => {
    const TestRecord = Record({ one: 1 });
    expect(clear(TestRecord({ one: 2 }))).toEqual(TestRecord());
  });

  it('clears a Seq.Indexed', () => {
    expect(clear(Seq.Indexed.of(1, 2, 3))).toEqual(Seq.Indexed());
  });

  it('clears a Seq.Keyed', () => {
    expect(clear(Seq.Keyed({ one: 1, two: 2, three: 3 }))).toEqual(Seq.Keyed());
  });

  it('clears a Seq.Set', () => {
    expect(clear(Seq.Set.of(1, 2, 3))).toEqual(Seq.Set());
  });

  it('clears a Set', () => {
    expect(clear(Set.of(1, 2, 3))).toEqual(Set());
  });
});
