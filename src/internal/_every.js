import { Iterable } from 'immutable';
import { every } from './TransmuteCollection';

every.implement(Array, (predicate, arr) => {
  return arr.every(predicate);
});

every.implementInherited(Iterable, (test, iter) => iter.every(test));

every.implement(Object, (predicate, obj) => {
  const keys = Object.keys(obj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (!predicate(obj[key], key, obj)) {
      return false;
    }
  }
  return true;
});

export default every;
