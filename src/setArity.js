import curry from './curry';
import _setArity from './internal/_setArity';

/**
 * Creates a function identical to `operation` but with length `arity`.
 *
 * @example
 * const op = (...args) => args;
 * op.length === 0;
 *
 * const twoArgOp = setArity(2, op);
 * twoArgOp.length === 2;
 *
 * @param  {number} arity from 0 to 9
 * @param  {Function} operation
 * @return {Function}
 */
const setArity = curry(_setArity);

export default setArity;
