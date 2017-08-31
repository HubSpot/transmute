import curry from './curry';
import _set from './internal/_set';

/**
 * Returns a copy of `subject` with `key` set to `value`.
 *
 * @example
 * set(2, 'one', {one: 1});
 * // returns {one: 2}
 *
 * @param {any} value
 * @param {any} key
 * @param {Array|Iterable|Object} subject
 * @return {Array|Iterable|Object}
 */
export default curry(_set);
