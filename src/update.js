import _get from './internal/_get';
import _set from './internal/_set';
import curry from './curry';

function update(key, updater, subject) {
  const value = _get(key, subject);
  return _set(updater(value), key, subject);
}

/**
 * Sets the value at `key` to the result of `updater`.
 *
 * @param {any} key
 * @param {Function} updater
 * @param {Array|Iterable|Object} subject
 * @return {Array|Iterable|Object}
 */
export default curry(update);
