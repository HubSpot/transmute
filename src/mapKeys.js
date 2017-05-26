import curry from "./curry";
import { Iterable, Seq } from "immutable";

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
function mapKeys(keyMapper, subject) {
  if (!Iterable.isKeyed(subject)) {
    throw new Error(
      `expected \`subject\` to be a KeyedIterable but got \`${subject}\``
    );
  }

  const nextEntries = subject
    .entrySeq()
    .map(([key, value]) => [keyMapper(key, value, subject), value]);
  if (Seq.isSeq(subject)) {
    return Seq.Keyed(nextEntries);
  }
  return new subject.constructor(nextEntries);
}

export default curry(mapKeys);
