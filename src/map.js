import curry from "./curry";

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
function map(mapper, subject) {
  return subject.map(mapper);
}

export default curry(map);
