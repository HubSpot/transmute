import { get } from './TransmuteCollection';
import { Iterable } from 'immutable';

const empty = () => undefined;

get.implement(null, empty);
get.implement(undefined, empty);

get.implementInherited(Iterable, (key, subject) => subject.get(key));

export default get;
