import curry from './curry';
import _getIn from './internal/_getIn';
import _setIn from './internal/_setIn';

function updateIn(keyPath, updater, subject) {
  const value = _getIn(keyPath, subject);
  return _setIn(keyPath, updater(value), subject);
}

/**
 * Apply `updater` to the value at `keyPath`.
 *
 * @example
 * const incrementUserCount = updateIn(['users', 'count'], n => n + 1);
 * incrementUserCount({users: {count: 1}});
 * // returns {users: {count: 2}}
 *
 * @param  {Array<any>|Iterable<any>} keyPath the location where `updater` should be applied.
 * @param  {Function} updater the tranformation to apply.
 * @param  {Array|Iterable|Object} subject the thing to update.
 * @return {Array|Iterable|Object}
 */
export default curry(updateIn);
