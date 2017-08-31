import enforceFunction from './enforce/enforceFunction';

function piped(operations, arg) {
  let result = arg;
  for (let i = 0; i < operations.length; i++) {
    result = operations[i](result);
  }
  return result;
}

/**
 * Create a function that runs operations from left-to-right.
 *
 * `pipe` is _not_ curried.
 *
 * @param  {Array<Function>} operations any number of unary functions.
 * @return {Function}
 */
export default function pipe(...operations) {
  operations.forEach(enforceFunction);
  return piped.bind(null, operations);
}
