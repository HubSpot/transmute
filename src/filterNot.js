import curry from "./curry";

/**
 * Remove values for which `predicate` returns `true`.
 *
 * @example
 * // returns List [ 1, 3 ]
 * filterNot(
 *   (n) => n % 2 === 0,
 *   List.of(1, 2, 3)
 * );
 *
 * @param {Function} predicate returns `true` if a value should be excluded.
 * @param {Iterable} subject to filter.
 * @return {Iterable} without values that matched `predicate`.
 */
function filterNot(predicate, subject) {
  return subject.filterNot(predicate);
}

export default curry(filterNot);
