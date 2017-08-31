import _filter from './internal/_filter';
import curry from './curry';
import { Seq } from 'immutable';

function pick(keys, subject) {
  const keySet = Seq.Set(keys);
  return _filter((value, key) => keySet.contains(key), subject);
}

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
