import curry from './curry';
import _scan from './internal/_scan';

/**
 * scan is similar to reduce, but returns a list of successive reduced values,
 * including the initial value
 *
 * @example
 * scan(0, (acc, val) => acc + val, [1, 2, 3]);
 * // returns List [ 0, 1, 3, 6 ]
 *
 * @example
 * scan(
 *   List(),
 *   (acc, val) => acc.push(val),
 *   Map({ one: 1, two: 2, three: 3 })
 * );
 * // returns List [ List [ ], List [ 1 ], List [ 1, 2 ], List [ 1, 2, 3 ] ]
 *
 * @param  {any} into
 * @param  {Function} operation
 * @param  {Iterable} subject   [description]
 * @return {Iterable}
 */
export default curry(_scan);
