import curry from "./curry";

function updateIn(keyPath, updater, subject) {
  return subject.updateIn(keyPath, updater);
}

/**
 * Apply `updater` to the value at `keyPath`.
 *
 * @param  {Array<any>} keyPath the location where `updater` should be applied.
 * @param  {Function} updater the tranformation to apply.
 * @param  {Iterable} subject the thing to update.
 * @return {Iterable}
 */
export default curry(updateIn);
