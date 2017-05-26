import curry from "./curry";

/**
 * Returns true if `value` is an instance of `Constructor`.
 *
 * @param  {Function} Constructor
 * @param  {any} value
 * @return {Boolean}
 */
function isInstanceOf(Constructor, value) {
  return value instanceof Constructor;
}

export default curry(isInstanceOf);
