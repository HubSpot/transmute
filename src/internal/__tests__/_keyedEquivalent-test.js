import _keyedEquivalent from '../_keyedEquivalent';
import { List, Map, Seq, Set } from 'immutable';

describe('transmute/internal/_keyedEquivalent', () => {
  it('returns an Object for an Array', () => {
    expect(_keyedEquivalent([])).toEqual({});
  });

  it('returns an Object for an Object', () => {
    expect(_keyedEquivalent({})).toEqual({});
  });

  it('returns a Map for an Iterable', () => {
    expect(_keyedEquivalent(List())).toEqual(Map());
    expect(_keyedEquivalent(Map())).toEqual(Map());
    expect(_keyedEquivalent(Set())).toEqual(Map());
  });

  it('returns a Keyed Seq for a Seq', () => {
    expect(_keyedEquivalent(Seq())).toEqual(Seq.Keyed());
    expect(_keyedEquivalent(Seq.Keyed())).toEqual(Seq.Keyed());
    expect(_keyedEquivalent(Seq.Set())).toEqual(Seq.Keyed());
    expect(_keyedEquivalent(Seq.Indexed())).toEqual(Seq.Keyed());
  });
});
