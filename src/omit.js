import curry from "./curry";
import { Map, Seq, Record } from "immutable";

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
function omit(keys, subject) {
  const keySet = Seq.Set(keys);
  // can't filter a Record so we reduce it to a Map
  if (subject instanceof Record) {
    return subject.reduce((acc, value, key) => {
      if (keySet.contains(key)) {
        return acc;
      }
      return acc.set(key, value);
    }, Map());
  }
  return subject.filterNot((value, key) => keySet.contains(key));
}

export default curry(omit);
