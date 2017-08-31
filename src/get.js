import always from './always';
import curry from './curry';
import { get } from './protocol/TransmuteCollection';
import { Iterable } from 'immutable';

const empty = always(undefined);

get.implement(Array, (key, subject) => subject[key]);
get.implement(null, empty);
get.implement(Object, (key, subject) => subject[key]);
get.implement(undefined, empty);

get.implementInherited(Iterable, (key, subject) => subject.get(key));

/**
 * Retrieve the value at `key` from `subject`.
 *
 * @example
 * // returns 1
 * get('one', Map({one: 1, two: 2, three: 3}))
 *
 * @param  {any} key to lookup in `subject`.
 * @param  {Iterable|Object} subject in which to look up `key`.
 * @return {any} the value at `key`.
 */
export default curry(get);
