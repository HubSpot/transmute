import curry from "./curry";

/**
 * Apply `updater` to the value at `keyPath`.
 *
 * @param  {Array<any>} keyPath the location where `updater` should be applied.
 * @param  {Function} updater the tranformation to apply.
 * @param  {Iterable} subject the thing to update.
 * @return {Iterable}
 */
function updateIn(keyPath, updater, subject) {
  return subject.updateIn(keyPath, updater);
}

export default curry(updateIn);
