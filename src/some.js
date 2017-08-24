import curry from "./curry";
import { Iterable } from "immutable";
import { some } from "./protocols/Collection";

some.implement(Array, (predicate, arr) => {
  return arr.some(predicate);
});

some.implementInherited(Iterable, (test, iter) => iter.some(test));

some.implement(Object, (predicate, obj) => {
  const keys = Object.keys(obj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (predicate(obj[key], key, obj)) {
      return true;
    }
  }
  return false;
});

/**
 * Returns `true` if **any** items in `subject` match `predicate`.
 *
 * @param  {Function} predicate returns `true` if item is a match.
 * @param  {Iterable} subject
 * @return {bool}
 */
export default curry(some);
