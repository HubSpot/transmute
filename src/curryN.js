import _enforceArity from './internal/_enforceArity';
import _enforceFunction from './internal/_enforceFunction';
import _setArity from './internal/_setArity';

/* eslint no-use-before-define: 0 */
function bindWithArity(operation, arity, args) {
  const curried = _setArity(
    arity,
    curryInternal.bind(null, operation, arity, args)
  );
  curried.args = args;
  curried.operation = operation;
  return curried;
}

function curryInternal(operation, arity, prevArgs, ...nextArgs) {
  const remainingArity = arity - nextArgs.length;
  const args = prevArgs.concat(nextArgs);
  if (remainingArity <= 0) {
    return operation(...args);
  }
  return bindWithArity(operation, remainingArity, args);
}

function curryN(arity, operation) {
  return bindWithArity(_enforceFunction(operation), _enforceArity(arity), []);
}

/**
 * Create a curried version of `operation` that expects `arity` arguments.
 * Inception-ally, `curryN` is also curried.
 *
 * @example
 * const toArray = curryN(3)((...args) => [...args]);
 * toArray(1, 2, 3) === [1, 2, 3];
 *
 * @param  {number} arity number of arguments the curried function accepts
 * @param  {Function} operation to curry
 * @return {Function}
 */
export default curryN(2, curryN);
