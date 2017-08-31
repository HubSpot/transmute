import { Iterable } from 'immutable';
import { reduce } from './TransmuteCollection';

reduce.implement(Array, (into, operation, arr) => {
  return arr.reduce(operation, into);
});

reduce.implement(Object, (into, operation, obj) => {
  const keys = Object.keys(obj);
  const len = keys.length;
  let acc = into;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    acc = operation(acc, obj[key], key, obj);
  }
  return acc;
});

reduce.implementInherited(Iterable, (into, operation, iter) => {
  return iter.reduce(operation, into);
});

export default reduce;
