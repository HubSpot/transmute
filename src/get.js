import curry from "./curry";
import { Iterable } from "immutable";

/**
 * Retrieve the value at `key` from `subject`.
 *
 * @example
 * // returns 1
 * get('one', Map({one: 1, two: 2, three: 3}))
 *
 * @param  {any} key to lookup in `subject`.
 * @param  {Iterable|Object} subject in which to look up `key`.
 * @return {any} the value at `key`.
 */
function get(key, subject) {
  if (subject === null || subject === undefined) {
    return undefined;
  }
  if (Iterable.isIterable(subject)) {
    return subject.get(key);
  }
  return subject[key];
}

export default curry(get);
