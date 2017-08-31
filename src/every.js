import curry from './curry';
import _every from './internal/_every';

/**
 * Returns `true` if **all** items in `subject` match `predicate`.
 *
 * @param  {Function} predicate returns `true` if item is a match.
 * @param  {Iterable} subject
 * @return {bool}
 */
export default curry(_every);
