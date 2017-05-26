import curry from "./curry";

/**
 * Returns true if the results of `arg` applied to either `first` or `second`
 * are truthy.
 *
 * @param  {Function} first
 * @param  {Function} second
 * @param  {any} arg
 * @return {boolean}
 */
function either(first, second, arg) {
  return first(arg) || second(arg);
}

export default curry(either);
