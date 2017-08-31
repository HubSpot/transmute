import curry from './curry';

function isInstanceOf(Constructor, value) {
  return value instanceof Constructor;
}

/**
 * Returns true if `value` is an instance of `Constructor`.
 *
 * @param  {Function} Constructor
 * @param  {any} value
 * @return {boolean}
 */
export default curry(isInstanceOf);
