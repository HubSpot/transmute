import _filter from './internal/_filter';
import curry from './curry';
import match from './match';

function where(pattern, subject) {
  return _filter(match(pattern), subject);
}

/**
 * Takes items in `subject` that match `pattern`.
 *
 * @example
 * const users = Map({
 *   123: {id: '123', name: 'Jack'},
 *   456: {id: '456', name: 'Jill'},
 * });
 *
 * where({name: 'Jack'}, users);
 * // returns Map { 123: {id: '123', name: 'Jack'} }
 *
 * @param  {Function} pattern
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(where);
