import _enforceFunction from './internal/_enforceFunction';

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
 * @example
 * const doubleAndTakeEvens = pipe(
 *   filter(n => n % 2 === 0),
 *   map(n => n * 2)
 * );
 *
 * doubleAndTakeEvens(List.of(1, 2, 3))
 * // returns List [ 2, 4, 6 ]
 *
 * @param  {Array<Function>} operations any number of unary functions.
 * @return {Function}
 */
export default function compose(...operations) {
  operations.forEach(_enforceFunction);
  return composed.bind(null, operations);
}
