// @flow
import curry from "./curry";

/**
 * Returns true if the results of `arg` applied to both `first` and `second`
 * are truthy.
 */
function both<T>(
  first: (arg: T) => boolean,
  second: (arg: T) => boolean,
  arg: T
) {
  return !!(first(arg) && second(arg));
}

export default curry(both);
