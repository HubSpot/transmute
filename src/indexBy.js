import _reduce from './internal/_reduce';
import curry from './curry';
import { Iterable, Map, OrderedMap } from 'immutable';

function indexBy(keyMapper, subject) {
  return _reduce(
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
 * @example
 * indexBy(get('id'), List.of({id: 123}, {id: 456}))
 * // returns Map { 123: {id: 123}, 456: {id: 456} }
 *
 * @param  {Function} keyMapper generates keys for each item
 * @param  {Iterable} subject to index
 * @return {KeyedIterable}
 */
export default curry(indexBy);
