import curry from "./curry";
import { Iterable } from "immutable";
import reduce from "./reduce";
import { merge } from "./protocols/Settable";

merge.implement(Object, (updates, obj) => {
  const result = Object.assign({}, obj);
  return reduce.operation(
    result,
    (acc, val, key) => {
      acc[key] = val;
      return result;
    },
    updates
  );
});

merge.implementInherited(Iterable, (updates, subject) =>
  subject.merge(updates)
);

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
export default curry(merge);
