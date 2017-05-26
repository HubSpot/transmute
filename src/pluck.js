import curry from "./curry";
import get from "./get";

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
function pluck(key, subject) {
  return subject.map(get(key));
}

export default curry(pluck);
