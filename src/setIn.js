import _setIn from './internal/_setIn';
import curry from './curry';

/**
 * Set the `value` at `keyPath` in a nested structure.
 *
 * @example
 * setIn(3, ['one', 'two'], {one: {two: 2}});
 * // returns {one: {two: 3}}
 *
 * @example <caption>Unset keyPaths will be set based on the most recent type.</caption>
 * setIn(3, ['one', 'two'], {});
 * // returns {one: {two: 3}}
 *
 * setIn(3, ['one', 'two'], Map());
 * // returns Map { one => Map { two => 3 } }
 *
 * @param {Array<any>|Iterable<any>} keyPath
 * @param {any} value
 * @param {Array|Iterable|Object} subject
 * @param {Array|Iterable|Object}
 */
export default curry(_setIn);
