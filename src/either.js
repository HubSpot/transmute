import curry from './curry';

function either(first, second, arg) {
  return first(arg) || second(arg);
}

/**
 * Returns true if the results of `arg` applied to either `first` or `second`
 * are truthy.
 *
 * @param  {Function} first
 * @param  {Function} second
 * @param  {any} arg
 * @return {boolean}
 */
export default curry(either);
