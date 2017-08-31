import { Iterable } from 'immutable';
import { map } from './TransmuteCollection';

map.implement(Array, (mapper, arr) => arr.map(mapper));

map.implementInherited(Iterable, (mapper, iter) => iter.map(mapper));

map.implement(Object, (mapper, obj) => {
  const result = {};
  const keys = Object.keys(obj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    result[key] = mapper(obj[key], key, obj);
  }
  return result;
});

export default map;
