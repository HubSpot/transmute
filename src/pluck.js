import _get from './internal/_get';
import _map from './internal/_map';
import curry from './curry';

function pluck(key, subject) {
  return _map(item => _get(key, item), subject);
}

/**
 * Select `key` from each item in `subject`.
 *
 * @example
 * const pluckName = pluck('name');
 * pluckName(userMap) === Map({123: 'Testing'});
 *
 * @param  {any} key
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(pluck);
