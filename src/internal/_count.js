import { count } from './TransmuteCollection';
import { Iterable } from 'immutable';

count.implement(Array, arr => arr.length);

count.implementInherited(Iterable, subject => subject.count());

count.implement(Object, obj => Object.keys(obj).length);

export default count;
