import curry from "./curry";
import filter from "./filter";

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
export default curry((predicate, subject) => {
  return filter.operation((...args) => !predicate(...args), subject);
});
