import curry from './curry';
import _forEach from './internal/_forEach';

/**
 * Executes `effect` for each value in `subject`, then returns `subject`.
 *
 * forEach(
 *   v => console.log(v),
 *   Map({ one: 1, two: 2, three: 3 })
 * );
 *
 * // prints...
 * // 1
 * // 2
 * // 3
 *
 * @param {Function} effect
 * @param {TYPE} subject
 * @return {TYPE}
 */
export default curry(_forEach);
