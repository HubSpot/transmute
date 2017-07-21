import curry from "./curry";
import { Iterable } from "immutable";
import { map } from "./protocols/Reducable";

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

/**
 * Create a new Iterable by applying `mapper` to each item in `subject`.
 *
 * @example
 * // returns List [ 2, 3, 4 ]
 * map(
 *   (val) => val + 1,
 *   List.of(1, 2, 3)
 * );
 *
 * @param  {Function} mapper applied to each item in `subject`.
 * @param  {Iterable} subject the Iterable to map.
 * @return {Iterable} with each value of `subject` updated with mapper.
 */
export default curry(map);
