import curry from "./curry";

/**
 * Returns `true` if **any** items in `subject` match `predicate`.
 *
 * @param  {Function} predicate returns `true` if item is a match.
 * @param  {Iterable} subject
 * @return {bool}
 */
function some(predicate, subject) {
  return subject.some(predicate);
}

export default curry(some);
