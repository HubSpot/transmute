import curry from "./curry";
import match from "./match";

/**
 * Takes items in `subject` that match `pattern`.
 *
 * @param  {Function} pattern
 * @param  {Iterable} subject
 * @return {Iterable}
 */
function where(pattern, subject) {
  return subject.filter(match(pattern));
}

export default curry(where);
