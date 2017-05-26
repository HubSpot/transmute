import curry from "./curry";

/**
 * Returns `true` if **all** items in `subject` match `predicate`.
 * @param  {Function} predicate returns `true` if item is a match.
 * @param  {Iterable} subject
 * @return {bool}
 */
function every(predicate, subject) {
  return subject.every(predicate);
}

export default curry(every);
