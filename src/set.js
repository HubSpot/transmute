import curry from "./curry";
import { Iterable, is } from "immutable";
import { set } from "./protocols/TransmuteCollection";

set.implement(Array, (value, index, arr) => {
  if (is(arr[index], value)) {
    return arr;
  }
  const next = arr.concat();
  next.splice(index, 1, value);
  return next;
});

set.implementInherited(Iterable, (value, key, subject) => {
  return subject.set(key, value);
});

set.implement(Object, (value, key, obj) => {
  if (is(obj[key], value)) {
    return obj;
  }
  const result = Object.assign({}, obj);
  result[key] = value;
  return result;
});

/**
 * @param {any} value
 * @param {any} key
 * @param {Array|Iterable|Object} subject
 * @return {Array|Iterable|Object}
 */
export default curry(set);
