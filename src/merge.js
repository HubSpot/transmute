import curry from "./curry";
import reduce from "./reduce";
import set from "./set";

const reduceOp = reduce.operation;
const setOp = set.operation;

function merge(updates, subject) {
  return reduceOp(
    subject,
    (acc, value, key) => setOp(value, key, acc),
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
export default curry(merge);
