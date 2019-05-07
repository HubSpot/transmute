import concat from '../concat';
import { List, Map } from 'immutable';

describe('transmute/concat', () => {
  it('throws error when subject is `null` or `undefined`', () => {
    expect(() => concat(List(), null)).toThrow();
    expect(() => concat(Map(), null)).toThrow();
  });

  it('throws error when update is `null` or `undefined`', () => {
    expect(() => concat(null, List())).toThrow();
    expect(() => concat(null, Map())).toThrow();
  });

  describe('concatenates Lists', () => {
    it('joins primitives', () => {
      expect(concat(List([3]), List([1, 2, 3]))).toEqual(List([1, 2, 3, 3]));
      expect(concat(List([null]), List([null]))).toEqual(List([null, null]));
    });

    it('joins objects', () => {
      const LIST_1 = List();
      const LIST_2 = List();

      expect(concat(List([LIST_2]), List([LIST_1]))).toEqual(
        List([LIST_1, LIST_2])
      );
    });

    it('joins empty lists', () => {
      const LIST_1 = List();
      const LIST_2 = List();

      expect(concat(LIST_2, LIST_1)).toEqual(List());
    });

    it('returns the original list if the concat is empty', () => {
      const LIST_1 = List(['a', 'b']);
      const LIST_2 = List();

      expect(concat(LIST_2, LIST_1)).toEqual(LIST_1);
    });
  });

  describe('concatenates Maps', () => {
    it('does not overwrite different keys', () => {
      const MAP_1 = Map({ a: 'a' });
      const MAP_2 = Map({ b: 'b' });
      expect(concat(MAP_2, MAP_1)).toEqual(Map({ a: 'a', b: 'b' }));
    });
    it('overwrites existing keys', () => {
      const MAP_1 = Map({ a: 'a', b: 'b' });
      const MAP_2 = Map({ b: 'b', c: 'c' });
      expect(concat(MAP_2, MAP_1)).toEqual(Map({ a: 'a', b: 'b', c: 'c' }));
    });
    it('joins empty maps', () => {
      const MAP_1 = Map();
      const MAP_2 = Map();
      expect(concat(MAP_2, MAP_1)).toEqual(Map());
    });
    it('returns the original map if concat is empty', () => {
      const MAP_1 = Map({ a: 'a', b: 'b' });
      const MAP_2 = Map();
      expect(concat(MAP_2, MAP_1)).toEqual(MAP_1);
    });
  });
});
