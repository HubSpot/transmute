// @flow
/* eslint-disable no-redeclare */
import _enforceFunction from './internal/_enforceFunction';

declare function compose<A, B, C>(
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, C>;

declare function compose<A, B, C, D>(
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, D>;

declare function compose<A, B, C, D, E>(
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, E>;

declare function compose<A, B, C, D, E, F>(
  fe: Fn1<F, E>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, F>;

declare function compose<A, B, C, D, E, F, G>(
  fg: Fn1<F, G>,
  fe: Fn1<F, E>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, G>;

declare function compose<A, B, C, D, E, F, G, H>(
  fh: Fn1<F, H>,
  fg: Fn1<F, G>,
  fe: Fn1<F, E>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, H>;

declare function compose<A, B, C, D, E, F, G, H, I>(
  fi: Fn1<H, I>,
  fh: Fn1<F, H>,
  fg: Fn1<F, G>,
  fe: Fn1<F, E>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, I>;

declare function compose<A, B, C, D, E, F, G, H, I, J>(
  fj: Fn1<I, J>,
  fi: Fn1<H, I>,
  fh: Fn1<F, H>,
  fg: Fn1<F, G>,
  fe: Fn1<F, E>,
  de: Fn1<D, E>,
  cd: Fn1<C, D>,
  bc: Fn1<B, C>,
  ab: Fn1<A, B>,
  ...rest: Array<void>
): Fn1<A, J>;

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
function compose(...operations) {
  operations.forEach(_enforceFunction);
  return composed.bind(null, operations);
}

export default compose;
