import _filter from './internal/_filter';
import curry from './curry';
import match from './match';

function where(pattern, subject) {
  return _filter(match(pattern), subject);
}

/**
 * Takes items in `subject` that match `pattern`.
 *
 * @param  {Function} pattern
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(where);
