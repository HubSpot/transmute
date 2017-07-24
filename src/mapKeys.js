import curry from "./curry";
import { Collection, Seq } from "immutable";
import { mapKeys } from "./protocols/Keyed";

mapKeys.implement(Object, (keyMapper, subject) => {
  const keys = Object.keys(subject);
  const len = keys.length;
  const result = {};
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    const value = subject[key];
    result[keyMapper(key, value, subject)] = value;
  }
  return result;
});

mapKeys.implementInherited(Collection.Keyed, (keyMapper, subject) => {
  const nextEntries = subject
    .entrySeq()
    .map(([key, value]) => [keyMapper(key, value, subject), value]);
  return new subject.constructor(nextEntries);
});

mapKeys.implementInherited(Seq.Keyed, (keyMapper, subject) => {
  const nextEntries = subject
    .entrySeq()
    .map(([key, value]) => [keyMapper(key, value, subject), value]);
  return Seq.Keyed(nextEntries);
});

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
