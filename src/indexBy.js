import curry from "./curry";
import { Iterable, Map, OrderedMap } from "immutable";
import reduce from "./reduce";

const reduceOperation = reduce.operation;

function indexBy(keyMapper, subject) {
  return reduceOperation(
    Iterable.isOrdered(subject) || !Iterable.isIterable(subject)
      ? OrderedMap()
      : Map(),
    (acc, v, k) => acc.set(keyMapper(v, k, subject), v),
    subject
  );
}

/**
 * Create a Map, or OrderedMap from `subject` with a key for each item
 * returned by `keyMapper`.
 *
 * @param  {Function} keyMapper generates keys for each item
 * @param  {Iterable} subject to index
 * @return {KeyedIterable}
 */
export default curry(indexBy);
