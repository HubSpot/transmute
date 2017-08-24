import curry from "./curry";
import { Iterable, Map, Record } from "immutable";
import { filter } from "./protocols/TransmuteCollection";

filter.implement(Array, (test, arr) => arr.filter(test));

filter.implementInherited(Iterable, (test, iter) => iter.filter(test));

filter.implement(Object, (test, obj) => {
  const result = {};
  const keys = Object.keys(obj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    const val = obj[key];
    if (test(val, key, obj)) {
      result[key] = val;
    }
  }
  return result;
});

filter.implementInherited(Record, (test, rec) => {
  return rec.reduce((acc, val, key) => {
    if (!test(val, key, rec)) {
      return acc;
    }
    return acc.set(key, val);
  }, Map());
});

/**
 * Remove values for which `predicate` returns `false`.
 *
 * @example
 * // returns List [ 2 ]
 * filter(
 *   (n) => n % 2 === 0,
 *   List.of(1, 2, 3)
 * );
 *
 * @example <caption>`Record`s have a fixed set of keys, so filter returns a Map instead.</caption>
 * // returns Map { 'one' => 1, 'three' => 3 }
 * filter(
 *   (n) => n % 2 === 0,
 *   ThreeRecord({one: 1, two: 2, three: 3})
 * );
 *
 * @param {Function} predicate returns `true` if a value should be included.
 * @param {Iterable} subject to filter.
 * @return {Iterable} without values that didn't match `predicate`.
 */
export default curry(filter);
