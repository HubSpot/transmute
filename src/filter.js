import curry from "./curry";

/**
 * Remove values for which `predicate` returns `false`.
 *
 * @example
 * // returns List [ 2 ]
 * filter(
 *   (n) => n % 2 === 0,
 *   List.of(1, 2, 3)
 * );
 *
 * @param {Function} predicate returns `true` if a value should be included.
 * @param {Iterable} subject to filter.
 * @return {Iterable} without values that didn't match `predicate`.
 */
function filter(predicate, subject) {
  return subject.filter(predicate);
}

export default curry(filter);
