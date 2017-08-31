import { List } from 'immutable';
import memoizeLast from '../memoizeLast';

describe('transmute/memoizeLast', () => {
  describe('one argument', () => {
    let sum;
    let sumImpl;

    beforeEach(() => {
      sumImpl = jest.fn(nums => nums.reduce((acc, n) => acc + n));
      // extra wrapper function ensures the correct operation.length
      sum = memoizeLast(nums => sumImpl(nums));
    });

    it('caches the last value', () => {
      expect(sum(List.of(1, 2, 3))).toEqual(6);
      expect(sum(List.of(1, 2, 3))).toEqual(6);
      expect(sumImpl.mock.calls.length).toEqual(1);
    });

    it('clears the cache when a new arg is passed', () => {
      expect(sum(List.of(1, 2, 3))).toEqual(6);
      expect(sum(List.of(1, 2, 3))).toEqual(6);
      expect(sumImpl.mock.calls.length).toEqual(1);
      expect(sum(List.of(4, 5, 6))).toEqual(15);
      expect(sum(List.of(4, 5, 6))).toEqual(15);
      expect(sum(List.of(1, 2, 3))).toEqual(6);
      expect(sumImpl.mock.calls.length).toEqual(3);
    });
  });

  describe('multiple arguments', () => {
    let sum;
    let sumImpl;

    beforeEach(() => {
      sumImpl = jest.fn((a, b, c) => a + b + c);
      sum = memoizeLast(sumImpl);
    });

    it('caches the last value', () => {
      expect(sum(1, 2, 3)).toEqual(6);
      expect(sum(1, 2, 3)).toEqual(6);
      expect(sumImpl.mock.calls.length).toEqual(1);
    });

    it('clears the cache when a new arg is passed', () => {
      expect(sum(1, 2, 3)).toEqual(6);
      expect(sum(1, 2, 3)).toEqual(6);
      expect(sumImpl.mock.calls.length).toEqual(1);
      expect(sum(4, 5, 6)).toEqual(15);
      expect(sum(4, 5, 6)).toEqual(15);
      expect(sum(1, 2, 3)).toEqual(6);
      expect(sumImpl.mock.calls.length).toEqual(3);
    });
  });
});
