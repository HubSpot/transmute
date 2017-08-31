import _every from './internal/_every';
import _get from './internal/_get';
import _has from './internal/_has';
import curry from './curry';
import { is } from 'immutable';

function match(pattern, candidate) {
  return _every(
    (val, key) => _has(key, candidate) && is(val, _get(key, candidate)),
    pattern
  );
}

/**
 * Returns `true` if the key => value pairs in `pattern` match the correspoding key => value pairs in `subject`.
 *
 * @example
 * const hasOneAndThree = match({one: 1, three: 3});
 * hasOneAndThree(Map({one: 1, two: 2, three: 3})) === true;
 *
 * @param {Array|Iterable|Object} pattern
 * @param {Array|Iterable|Object} subject
 * @return {boolean}
 */
export default curry(match);
