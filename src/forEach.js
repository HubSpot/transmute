import curry from './curry';
import _forEach from './internal/_forEach';

/**
 * Executes `effect` for each value in `subject`, then returns `subject`.
 *
 * @param {Function} effect
 * @param {TYPE} subject
 * @return {TYPE}
 */
export default curry(_forEach);
