import { Iterable, Map, Record } from 'immutable';
import { concat } from './TransmuteCollection';

concat.implement(Array, (update, arr) => arr.concat(update));

concat.implementInherited(Iterable, (update, iter) => iter.concat(update));

concat.implement(Object, (update, obj) => {
  return Object.assign({}, obj, update);
});

export default concat;
