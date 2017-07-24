import curry from "./curry";
import { Iterable, Map, OrderedMap } from "immutable";
import reduce from "./reduce";

/**
 * Create a Map, or OrderedMap from `subject` with a key for each item
 * returned by `keyMapper`.
 *
 * @param  {Function} keyMapper generates keys for each item
 * @param  {Iterable} subject to index
 * @return {KeyedIterable}
 */
function indexBy(keyMapper, subject) {
  return reduce(
    Iterable.isOrdered(subject) || !Iterable.isIterable(subject)
      ? OrderedMap()
      : Map(),
    (acc, v, k) => acc.set(keyMapper(v, k, subject), v),
    subject
  );
}

export default curry(indexBy);
