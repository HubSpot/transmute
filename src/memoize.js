import _enforceFunction from './internal/_enforceFunction';
import { Map, Seq } from 'immutable';

function defaultHashFunction(...args) {
  if (args.length === 1) {
    return args[0];
  }
  return Seq(args);
}

function memoized1(cache, operation, hashFunction, ...args) {
  const key = hashFunction(...args);
  if (!cache.has(key)) {
    cache.set(key, operation(...args));
  }
  return cache.get(key);
}

function memoizedN(cache, operation, hashFunction, ...args) {
  const key = hashFunction(...args);
  if (!cache.has(key)) {
    cache.set(key, operation(...args));
  }
  return cache.get(key);
}

/**
 * Memoizer that uses a `Map` to allow for arbitrarily many/complex keys.
 *
 * @example
 * const sum = memoize((list) => {
 *   return list.reduce((total, n) => total + n, 0);
 * });
 * // does work and returns 15
 * sum(List.of(1, 2, 3, 4, 5))
 * // returns 15 but does no work
 * sum(List.of(1, 2, 3, 4, 5))
 *
 * @example <caption>We can use the `hashFunction` param to customize the key used in the cache.</caption>
 * const sum = memoize(
 *   (list) => list.reduce((total, n) => total + n, 0),
 *   (list) => return list.join('-')
 * );
 *
 * @example <caption>It's also possible to inspect the state of an instance by reading the `.cache` property.</caption>
 *
 * const sum = memoize(...);
 * Map.isMap(sum.cache) === true;
 *
 * @param  {Function}  operation to memoize.
 * @param  {Function}  hashFunction that generates the cache key.
 * @return {Function}  memoized version of `operation`.
 */
export default function memoize(operation, hashFunction = defaultHashFunction) {
  _enforceFunction(operation);
  const cache = Map().asMutable();
  const memoizer = operation.length === 1 ? memoized1 : memoizedN;
  const result = memoizer.bind(null, cache, operation, hashFunction);
  result.cache = cache;
  return result;
}
