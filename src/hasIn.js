import count from "./count";
import curry from "./curry";
import getIn from "./getIn";
import has from "./has";

const getInOp = getIn.operation;
const hasOp = has.operation;

function hasIn(keyPath, subject) {
  const keyLen = count(keyPath);
  if (keyLen === 0) {
    return false;
  }

  const parent = getInOp(keyPath.slice(0, -1), subject);
  if (parent === undefined) {
    return false;
  }

  return hasOp(keyPath[keyLen - 1], parent);
}

/**
 * Returns `true` if `keyPath` is defined in a nested data structure.
 *
 * `hasIn` short circuts and returns `false` when it encounters a `null` or `undefined` value.
 *
 * @example
 * const hasFirstName = hasIn(['name', 'first']);
 * const user = UserRecord({
 *   name: Map({
 *     first: 'Test',
 *     last: 'Testerson',
 *   }),
 * });
 * hasFirstName(user) === true
 *
 * @param  {Array<string>} keyPath
 * @param  {Array|Iterable|Object} subject
 * @return {boolean}
 */
export default curry(hasIn);
