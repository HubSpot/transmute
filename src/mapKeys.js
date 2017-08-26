import clear from "./clear";
import curry from "./curry";
import { Iterable } from "immutable";
import isObject from "./isObject";
import reduce from "./reduce";
import set from "./set";
import { TransmuteCollection } from "./protocols/TransmuteCollection";
console.info(TransmuteCollection);

const reduceOp = reduce.operation;
const setOp = set.operation;

function mapKeys(keyMapper, subject) {
  if (!Iterable.isKeyed(subject) && !isObject(subject)) {
    throw new Error(
      `expected an Object or other Keyed Collection but got \`${subject}\``
    );
  }
  console.info(TransmuteCollection);
  return reduceOp(
    clear(subject),
    (acc, value, key) => setOp(value, keyMapper(key, value, subject), acc),
    subject
  );
}

/**
 * Like `map` but transforms an Iterable's keys rather than its values.
 *
 * @example <caption>Can be useful for converting keys of API results to a common type.</caption>
 * import { mapKeys, toString } from 'transmute';
 * const stringifyKeys = mapKeys(toString);
 * const m = Map.of(123, Map(), 456, Map(), 789, Map());
 * stringifyKeys(m).equals(Map.of('123', Map(), '456', Map(), '789', Map()));
 *
 * @param  {Function} keyMapper returns a new key
 * @param  {KeyedIterable} subject
 * @return {KeyedIterable}
 */
export default curry(mapKeys);
