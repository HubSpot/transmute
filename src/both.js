// @flow
import curry from "./curry";

function both<T>(
  condition1: (arg: T) => boolean,
  condition2: (arg: T) => boolean,
  arg: T
) {
  return !!(condition1(arg) && condition2(arg));
}

/**
 * Returns `true` if the results of `arg` applied to both `condition1` and
 * `condition2` are truthy.
 *
 * @param {Function} condition1
 * @param {Function} condition2
 * @return {boolean}
 */
export default curry(both);
