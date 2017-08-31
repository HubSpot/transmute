import { List, Set, Seq, Map } from 'immutable';
import difference from '../difference';

describe('transmute/difference', () => {
  it('returns empty iterable when no differences', () => {
    expect(difference(List(['a', 'b']), List(['a', 'b']))).toMatchSnapshot();
  });

  it('returns full iterable when no toRemove given', () => {
    expect(difference(undefined, List(['a', 'b']))).toMatchSnapshot();
  });

  it('returns differences for list', () => {
    expect(difference(List(['c', 'b']), List(['a', 'b']))).toMatchSnapshot();
  });

  it('returns differences for Set', () => {
    expect(difference(Set(['c', 'b']), Set(['a', 'b']))).toMatchSnapshot();
  });

  it('returns differences for Seq', () => {
    expect(difference(Seq(['c', 'b']), Seq(['a', 'b']))).toMatchSnapshot();
  });

  it('returns differences for Map with key from subject', () => {
    expect(
      difference(Map({ c1: 'c', b1: 'b' }), Map({ a2: 'a', b2: 'b' }))
    ).toMatchSnapshot();
  });

  it('return type is same as subject type', () => {
    expect(List.isList(difference(Seq(), List()))).toBe(true);
  });
});
