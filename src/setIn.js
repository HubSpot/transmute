import _setIn from './internal/_setIn';
import curry from './curry';

/**
 * Set the `value` at `keyPath` in a nested structure.
 *
 * @example
 * setIn(3, ['one', 'two'], {one: {two: 2}});
 * // returns {one: {two: 3}}
 *
 * @param {Array<any>|Iterable<any>} keyPath
 * @param {any} value
 * @param {Array|Iterable|Object} subject
 * @param {Array|Iterable|Object}
 */
export default curry(_setIn);
