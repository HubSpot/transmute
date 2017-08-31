import curry from './curry';
import _has from './internal/_has';

/**
 * Returns `true` if `key` exists in `subject`.
 *
 * @example
 * const hasOne = has('one');
 *
 * hasOne({one: 1}) === true;
 * hasOne(Map({two: 2})) === false;
 *
 * @param {any} key
 * @param {Array|Iterable|Object} subject
 * @return {boolean}
 */
export default curry(_has);
