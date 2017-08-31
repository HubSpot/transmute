import _clear from './internal/_clear';

/**
 * Returns an empty copy of `subject`.
 *
 * @example
 * clear([1, 2, 3]) // returns []
 * clear(List.of(1, 2, 3)) // returns List []
 * clear({one: 1, two: 2, three: 3}) // returns {}
 *
 * @param {Array|Collection|Object} subject
 * @return {Array|Collection|Object}
 */
export default _clear;
