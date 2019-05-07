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

  describe('concatenates vanilla JS types', () => {
    it('joins normal arrays', () => {
      expect(concat([3], [1, 2, 3])).toEqual([1, 2, 3, 3]);
      expect(concat([null], [null])).toEqual([null, null]);
      expect(concat([], [])).toEqual([]);
    });

    it('joins objects', () => {
      expect(concat({ a: 'a', b: 'b' }, { b: 'b', c: 'c' })).toEqual({
        a: 'a',
        b: 'b',
        c: 'c',
      });
      expect(concat({ a: 'a' }, { b: 'b', c: 'c' })).toEqual({
        a: 'a',
        b: 'b',
        c: 'c',
      });
      expect(concat({}, { b: 'b', c: 'c' })).toEqual({
        b: 'b',
        c: 'c',
      });
      expect(concat({}, {})).toEqual({});
    });

    it('joins strings', () => {
      expect(concat('bar', 'foo')).toEqual('foobar');
      expect(concat('', 'foo')).toEqual('foo');
      expect(concat('', '')).toEqual('');
    });
  });

  describe('concatenates Lists', () => {
    it('joins Lists of primitives', () => {
      expect(concat(List([3]), List([1, 2, 3]))).toEqual(List([1, 2, 3, 3]));
      expect(concat(List([null]), List([null]))).toEqual(List([null, null]));
    });

    it('joins List objects', () => {
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

    it('uses the subject List as the return value type', () => {
      expect(concat(['test'], List(['test']))).toEqual(List(['test', 'test']));
      expect(concat(List(['test']), ['test'])).toEqual(['test', 'test']);
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

    it('uses the subject Map as the return value type', () => {
      const MAP = Map({ a: 'a', b: 'b' });
      const OBJ = { b: 'b', c: 'c' };
      expect(concat(OBJ, MAP)).toEqual(Map({ a: 'a', b: 'b', c: 'c' }));

      expect(concat(MAP, OBJ)).toEqual({ a: 'a', b: 'b', c: 'c' });
    });
  });
});
