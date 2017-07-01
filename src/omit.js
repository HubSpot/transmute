import curry from "./curry";
import { Collection, Map, Seq, Record } from "immutable";
import { omit } from "./protocols/Keyed";

/**
function omit(keys, subject) {
  const keySet = Seq.Set(keys);
  // can't filter a Record so we reduce it to a Map
  if (subject instanceof Record) {
  }
  return subject.filterNot((value, key) => keySet.contains(key));
}
**/

omit.implement(Collection.Keyed, (keys, subject) => {
  const keySet = Seq.Set(keys);
  return subject.filterNot((value, key) => keySet.contains(key));
});

omit.implement(Object, (keys, subject) => {
  const keySet = Seq.Set(keys);
  const originalKeys = Object.keys(subject);
  const len = originalKeys.length;
  const result = {};
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (!keySet.contains(key)) {
      result[key] = subject[key];
    }
  }
  return result;
});

omit.implement(Record, (keys, subject) => {
  const keySet = Seq.Set(keys);
  return subject.reduce((acc, value, key) => {
    if (keySet.contains(key)) {
      return acc;
    }
    return acc.set(key, value);
  }, Map());
});

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
