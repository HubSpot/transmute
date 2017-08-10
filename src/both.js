// @flow
import curry from "./curry";

function both<T>(
  first: (arg: T) => boolean,
  second: (arg: T) => boolean,
  arg: T
) {
  return !!(first(arg) && second(arg));
}

/**
 * Returns true if the results of `arg` applied to both `first` and `second`
 * are truthy.
 */
export default curry(both);
