import enforceFunction from './enforce/enforceFunction';

function composed(operations, arg) {
  let result = arg;
  for (let i = operations.length - 1; i >= 0; i--) {
    result = operations[i](result);
  }
  return result;
}

/**
 * Create a function that runs operations from right-to-left.
 *
 * `compose` is _not_ curried.
 *
 * @param  {Array<Function>} operations any number of unary functions.
 * @return {Function}
 */
export default function compose(...operations) {
  operations.forEach(enforceFunction);
  return composed.bind(null, operations);
}
