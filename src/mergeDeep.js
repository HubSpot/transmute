import _reduce from './internal/_reduce';
import _set from './internal/_set';
import curry from './curry';
import isObject from './isObject';
import isRecord from './isRecord';
import isArray from './isArray';

function mergeDeep(updates, subject) {
  console.log({ updates, subject });
  return _reduce(
    subject,
    (acc, value, key) => {
      if (isObject(value) || isRecord(value)) {
        return _set(key, mergeDeep(value, subject[key]), acc);
      }
      return _set(key, value, acc);
    },
    updates
  );
}

/**
 * Takes each entry of `updates` and sets it on `subject`.
 *
 * @example
 * // returns Map { "one" => 3, "two" => 2, "three" => 1}
 * merge(
 *   Map({one: 1, two: 2, three: 3}),
 *   Map({one: 3, three: 1})
 * );
 *
 * @param  {Iterable} updates key-value pairs to merge in `subject`.
 * @param  {Iterable} subject the thing to update.
 * @return {Iterable} with each key-value of `updates` merged into `subject`.
 */
export default curry(mergeDeep);
