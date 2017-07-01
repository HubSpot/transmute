import curry from "./curry";
import { Collection, Map, Record, Seq } from "immutable";
import { pick } from "./protocols/Keyed";

pick.implement(Collection.Keyed, (keys, subject) => {
  const keySet = Seq.Set(keys);
  return subject.filter((_, key) => keySet.contains(key));
});

pick.implement(Object, (keys, subject) => {
  const len = keys.length;
  const result = {};
  for (let i = 0; i < len; i++) {
    result[keys[i]] = subject[keys[i]];
  }
  return result;
});

pick.implement(Record, (keys, subject) => {
  const keySet = Seq.Set(keys);
  return keySet.reduce((acc, key) => acc.set(key, subject.get(key)), Map());
});

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
export default curry(pick);
