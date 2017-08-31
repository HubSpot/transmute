import curry from './curry';
import get from './get';
import map from './map';

function pluck(key, subject) {
  return map.operation(get(key), subject);
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
