import { get } from './TransmuteCollection';
import { Iterable } from 'immutable';

const empty = () => undefined;

get.implement(Array, (key, subject) => subject[key]);
get.implement(null, empty);
get.implement(Object, (key, subject) => subject[key]);
get.implement(Error, (key, subject) => subject[key]);
get.implement(undefined, empty);

get.implementInherited(Iterable, (key, subject) => subject.get(key));

export default get;
