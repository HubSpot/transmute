import get from '../get';
import { List, Map, Seq } from 'immutable';

describe('transmute/get', () => {
  it('works with extra arguemtns', () => {
    expect(get('id')({ id: '123' }, 'random', [1, 2, 3])).toEqual('123');
  });

  it('works with Error objects', () => {
    const error = new Error();
    error.foo = 'bar';
    const getFoo = get('foo');
    expect(getFoo(error)).toEqual('bar');
  });

  describe('empty types', () => {
    const getTest = get('test');

    it('null', () => {
      expect(getTest(null)).toBe(undefined);
    });

    it('undefined', () => {
      expect(getTest(undefined)).toBe(undefined);
    });
  });

  describe('indexed types', () => {
    const getSecond = get(1);

    it('gets a property from an Array', () => {
      expect(getSecond([1, 2, 3])).toEqual(2);
    });

    it('gets a property from a List', () => {
      expect(getSecond(List.of(1, 2, 3))).toEqual(2);
    });

    it('gets an item from a Seq', () => {
      expect(getSecond(Seq.of(1, 2, 3))).toEqual(2);
    });
  });

  describe('keyed types', () => {
    const getTwo = get('two');

    it('gets a property from a Map', () => {
      expect(getTwo(Map.of('one', 1, 'two', 2, 'three', 3))).toEqual(2);
    });

    it('gets a property from an Object', () => {
      expect(getTwo({ one: 1, two: 2, three: 3 })).toEqual(2);
    });

    it('gets a property from an Object with no constructor', () => {
      expect(
        getTwo(
          Object.create(null, {
            one: { value: 1 },
            two: { value: 2 },
            three: { value: 3 },
          })
        )
      ).toEqual(2);
    });

    it('gets a property from a Seq', () => {
      expect(getTwo(Seq({ one: 1, two: 2, three: 3 }))).toEqual(2);
    });
  });
});
