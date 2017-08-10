import curry from "./curry";
import { Iterable } from "immutable";
import { every } from "./protocols/Reducable";

every.implement(Array, (predicate, arr) => {
  return arr.every(predicate);
});

every.implementInherited(Iterable, (test, iter) => iter.every(test));

every.implement(Object, (predicate, obj) => {
  const keys = Object.keys(obj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (!predicate(obj[key], key, obj)) {
      return false;
    }
  }
  return true;
});

/**
 * Returns `true` if **all** items in `subject` match `predicate`.
 *
 * @param  {Function} predicate returns `true` if item is a match.
 * @param  {Iterable} subject
 * @return {bool}
 */
export default curry(every);
