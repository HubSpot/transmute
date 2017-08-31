import { List, Map, Seq } from 'immutable';
import memoize from '../memoize';

describe('transmute/memoize', () => {
  it('throws if `operation` is not a function', () => {
    expect(() => memoize(null)).toThrow();
    expect(() => memoize(() => {})).not.toThrow();
  });

  it('exposes the cache', () => {
    expect(Map.isMap(memoize(() => {}).cache)).toBe(true);
  });

  it('passes args through to a custom hashFunction', () => {
    const hashFunction = jest.fn(() => 'test');
    const memoizedOp = memoize((a, b, c) => [a, b, c], hashFunction);
    memoizedOp(List.of(1, 2, 3), 'test', 1);
    expect(hashFunction).toHaveBeenCalledWith(List.of(1, 2, 3), 'test', 1);
  });

  describe('single argument', () => {
    const plus1 = n => n + 1;

    it('passes through arguements', () => {
      const operation = jest.fn(plus1);
      const memoizedOp = memoize(operation);
      expect(memoizedOp(10, 'test', List())).toEqual(11);
      expect(operation).toHaveBeenCalledWith(10, 'test', List());
    });

    it('doesnt recompute for the same single argument', () => {
      const operation = jest.fn(plus1);
      const memoizedOp = memoize(operation);
      expect(memoizedOp(20)).toEqual(21);
      expect(memoizedOp(20)).toEqual(21);
      expect(operation.mock.calls.length).toEqual(1);
      expect(memoizedOp.cache).toEqual(Map().set(20, 21));
    });

    it('works with Immutables', () => {
      const operation = jest.fn(a => a.join('-'));
      const memoizedOp = memoize(operation);
      expect(memoizedOp(List.of(1, 2, 3))).toEqual('1-2-3');
      expect(memoizedOp(List.of(1, 2, 3))).toEqual('1-2-3');
      expect(operation.mock.calls.length).toEqual(1);
    });

    it('returns the same value for a single arg with a hashFunction', () => {
      const hashFunction = jest.fn(n => n.toString());
      const operation = jest.fn(plus1);
      const memoizedOp = memoize(operation, hashFunction);
      expect(memoizedOp(30)).toEqual(31);
      expect(memoizedOp(30)).toEqual(31);
      expect(operation.mock.calls.length).toBe(1);
      expect(memoizedOp.cache).toEqual(Map({ '30': 31 }));
    });
  });

  describe('multiple arguements', () => {
    const add = (a, b, c) => a + b + c;

    it('passes through arguements', () => {
      const mockValue = 'testing';
      const operation = jest.fn(() => mockValue);
      const memoizedOp = memoize(operation);
      expect(memoizedOp(List.of(1, 2, 3), 'test', 1)).toEqual(mockValue);
      expect(operation).toHaveBeenCalledWith(List.of(1, 2, 3), 'test', 1);
    });

    it('doesnt recompute for the same multiple arguments', () => {
      const operation = jest.fn(add);
      const memoizedOp = memoize(operation);
      expect(memoizedOp(1, 2, 3)).toEqual(6);
      expect(memoizedOp(1, 2, 3)).toEqual(6);
      expect(operation.mock.calls.length).toEqual(1);
      expect(memoizedOp.cache).toEqual(Map().set(Seq.of(1, 2, 3), 6));
    });

    it('works with Immutables', () => {
      const operation = jest.fn((a, b) => a.concat(b));
      const memoizedOp = memoize(operation);
      expect(memoizedOp(List.of(1, 2), List.of(3, 4))).toEqual(
        List.of(1, 2, 3, 4)
      );
      expect(memoizedOp(List.of(1, 2), List.of(3, 4))).toEqual(
        List.of(1, 2, 3, 4)
      );
      expect(operation.mock.calls.length).toEqual(1);
    });

    it('works with dynamic args lists', () => {
      const operation = (...args) => args.join('-');
      const memoizedOp = memoize(operation);
      expect(memoizedOp(1, 2, 3, 4, 5)).toEqual('1-2-3-4-5');
      expect(memoizedOp(1, 2, 3, 4, 5)).toEqual('1-2-3-4-5');
      expect(memoizedOp.cache).toEqual(
        Map().set(Seq.of(1, 2, 3, 4, 5), '1-2-3-4-5')
      );
    });

    it('returns the same value for a single arg with a hashFunction', () => {
      const hashFunction = jest.fn((a, b, c) => `${a}-${b}-${c}`);
      const operation = jest.fn(add);
      const memoizedOp = memoize(operation, hashFunction);
      expect(memoizedOp(1, 2, 3)).toEqual(6);
      expect(memoizedOp(1, 2, 3)).toEqual(6);
      expect(operation.mock.calls.length).toBe(1);
      expect(memoizedOp.cache).toEqual(Map({ '1-2-3': 6 }));
    });
  });
});
