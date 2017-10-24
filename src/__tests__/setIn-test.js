import { List, Map } from 'immutable';
import setIn from '../setIn';

describe('transmute/setIn', () => {
  const setOneTwo = setIn(['one', 'two'], 3);

  it('returns `value` for an empty `keyPath`', () => {
    expect(setIn([], 1, {})).toBe(1);
  });

  it("throws if a value isn't settable", () => {
    expect(() => setOneTwo({ one: null })).toThrow();
    expect(() => setOneTwo({ one: undefined })).toThrow();
    expect(() => setOneTwo({ one: 1 })).toThrow();
  });

  it('guesses at the type if a key isnt in the value', () => {
    expect(setOneTwo({})).toEqual({ one: { two: 3 } });
    expect(setOneTwo(Map())).toEqual(Map.of('one', Map.of('two', 3)));
  });

  it('switched to a keyed when guessing at an indexed type', () => {
    expect(setIn([0, 0], 1, [])).toEqual([{ 0: 1 }]);
    expect(setIn([0, 0], 1, List())).toEqual(List.of(Map.of(0, 1)));
  });

  describe('same type', () => {
    it('sets in an Array', () => {
      expect(setIn([0, 1], 3, [[1, 2]])).toEqual([[1, 3]]);
    });

    it('sets in a Map', () => {
      expect(setOneTwo(Map.of('one', Map.of('two', 2)))).toEqual(
        Map.of('one', Map.of('two', 3))
      );
    });

    it('sets in an Object', () => {
      expect(setOneTwo({ one: { two: 2 } })).toEqual({ one: { two: 3 } });
    });
  });

  describe('mixed types', () => {
    it('sets in an Array of Objects', () => {
      const set1Two = setIn([1, 'two'], 3);
      expect(set1Two([0, { two: 2 }])).toEqual([0, { two: 3 }]);
    });

    it('sets in a Map of Objects', () => {
      expect(setOneTwo(Map.of('one', { two: 2 }))).toEqual(
        setOneTwo(Map.of('one', { two: 3 }))
      );
    });

    it('sets in an Object of Maps', () => {
      expect(setOneTwo({ one: Map.of('two', 2) })).toEqual({
        one: Map.of('two', 3),
      });
    });
  });
});
