import concat from '../concat';
import { List, Seq } from 'immutable';

describe('transmute/concat', () => {
  it('throws error when subject is `null` or `undefined`', () => {
    expect(() => concat(List(), null)).toThrow();
    expect(() => concat(Seq(), null)).toThrow();
  });

  it('correctly concatenates values when update is null', () => {
    expect(concat(null, List())).toEqual(List([null]));
    expect(concat(null, Seq())).toEqual(Seq([null]));
  });

  describe('concatenates vanilla JS types', () => {
    it('joins normal arrays', () => {
      expect(concat([3], [1, 2, 3])).toEqual([1, 2, 3, 3]);
      expect(concat([null], [null])).toEqual([null, null]);
      expect(concat([], [])).toEqual([]);
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

  describe('concatenates Sequences', () => {
    it('joins Seq of primitives', () => {
      expect(concat(Seq([3]), Seq([1, 2, 3]))).toEqual(
        Seq([1, 2, 3]).concat(Seq([3]))
      );
      expect(concat(Seq(null), Seq(null))).toEqual(Seq(null));
    });

    it('joins Seq objects', () => {
      const SEQ_1 = Seq();
      const SEQ_2 = Seq();
      expect(concat(Seq(SEQ_2), Seq(SEQ_1))).toEqual(Seq(SEQ_1, SEQ_2));
    });

    it('joins empty Seqs', () => {
      const SEQ_1 = Seq();
      const SEQ_2 = Seq();

      expect(concat(SEQ_2, SEQ_1)).toEqual(Seq());
    });

    it('returns the original Seq if the concat is empty', () => {
      const SEQ_1 = Seq(['a', 'b']);
      const SEQ_2 = Seq();

      expect(concat(SEQ_2, SEQ_1)).toEqual(SEQ_1);
    });

    it('uses the subject Seq as the return value type', () => {
      // https://github.com/facebook/jest/issues/5998
      expect(concat(['test'], Seq('test')).toJS()).toEqual([
        't',
        'e',
        's',
        't',
        'test',
      ]);
      expect(concat(Seq('test'), ['test'])).toEqual([
        'test',
        't',
        'e',
        's',
        't',
      ]);
    });
  });
});
