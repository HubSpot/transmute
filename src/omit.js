import curry from "./curry";
import { Seq } from "immutable";
import filterNot from "./filterNot";

const filterNotOperation = filterNot.operation;

function omit(keys, subject) {
  const keySet = Seq.Set(keys);
  return filterNotOperation((value, key) => keySet.contains(key), subject);
}

/**
 * Drop specified keys from a KeyedIterable (e.g. a `Map` or `OrderedMap`).
 *
 * @example
 * // returns Map { "two" => 2 }
 * omit(
 *   ['one', 'three'],
 *   Map({one: 1, two: 2, three: 3})
 * );
 *
 * @param  {Array<any>} keys to remove.
 * @param  {KeyedIterable} subject from which to remove `keys`.
 * @return {KeyedIterable} without `keys`.
 */
export default curry(omit);
