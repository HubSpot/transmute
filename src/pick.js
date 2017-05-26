import curry from "./curry";
import { Map, Record, Seq } from "immutable";

/**
 * Select specified keys from a KeyedIterable (e.g. a `Map` or `OrderedMap`).
 *
 * @example
 * // returns Map { "one" => 1, "three" => 3 }
 * pick(
 *   ['one', 'three'],
 *   Map({one: 1, two: 2, three: 3})
 * );
 *
 * @param  {Array|Iterable|Object} keys to select.
 * @param  {KeyedIterable} subject from which to select `keys`.
 * @return {KeyedIterable} with just `keys`.
 */
function pick(keys, subject) {
  const keySet = Seq.Set(keys);
  // can't filter a Record so we reduce it to a Map
  if (subject instanceof Record) {
    return keySet.reduce((acc, key) => acc.set(key, subject.get(key)), Map());
  }
  return subject.filter((_, key) => keySet.contains(key));
}

export default curry(pick);
