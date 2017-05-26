import curry from "./curry";
import _setArity from "./internal/_setArity";

/**
 * Creates a function identical to `operation` but with length `arity`.
 *
 * @param  {number} arity from 0 to 9
 * @param  {Function} operation
 * @return {Function}
 */
const setArity = curry(_setArity);

export default setArity;
