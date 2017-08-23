import curry from "./curry";
import filter from "./filter";
import match from "./match";

function where(pattern, subject) {
  return filter.operation(match(pattern), subject);
}

/**
 * Takes items in `subject` that match `pattern`.
 *
 * @param  {Function} pattern
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(where);
