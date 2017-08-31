import { count } from './protocols/TransmuteCollection';
import { Iterable } from 'immutable';

count.implement(Array, arr => arr.length);

count.implementInherited(Iterable, subject => subject.count());

count.implement(Object, obj => Object.keys(obj).length);

/**
 * Returns the number of values in `subject`.
 * 
 * @param {TYPE} subject
 * @return {number}
 */
export default count;
