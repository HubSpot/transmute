import curry from "./curry";
import { Iterable } from "immutable";
import { get } from "./protocols/Gettable";

function empty() {
  return undefined;
}

get.implement(undefined, empty);

get.implement(null, empty);

get.implementInherited(Iterable, (key, subject) => subject.get(key));

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
export default curry(get);
