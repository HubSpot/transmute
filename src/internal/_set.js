import { Iterable, is } from 'immutable';
import { set } from './TransmuteCollection';

set.implement(Array, (index, value, arr) => {
  if (is(arr[index], value)) {
    return arr;
  }
  const next = arr.concat();
  next.splice(index, 1, value);
  return next;
});

set.implementInherited(Iterable, (key, value, subject) => {
  return subject.set(key, value);
});

set.implement(Object, (key, value, obj) => {
  if (is(obj[key], value)) {
    return obj;
  }
  const result = Object.assign({}, obj);
  result[key] = value;
  return result;
});

export default set;
