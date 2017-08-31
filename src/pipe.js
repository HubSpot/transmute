// @flow
/* eslint-disable no-redeclare */
import _enforceFunction from './internal/_enforceFunction';

declare function pipe<A, B, C>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  ...rest: Array<void>
): Fn1<A, C>;

declare function pipe<A, B, C, D>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  ...rest: Array<void>
): Fn1<A, D>;

declare function pipe<A, B, C, D, E>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  de: Fn1<D, E>,
  ...rest: Array<void>
): Fn1<A, E>;

declare function pipe<A, B, C, D, E, F>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  de: Fn1<D, E>,
  ef: Fn1<E, F>,
  ...rest: Array<void>
): Fn1<A, F>;

declare function pipe<A, B, C, D, E, F, G>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  de: Fn1<D, E>,
  ef: Fn1<E, F>,
  fg: Fn1<F, G>,
  ...rest: Array<void>
): Fn1<A, G>;

declare function pipe<A, B, C, D, E, F, G, H>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  de: Fn1<D, E>,
  ef: Fn1<E, F>,
  fg: Fn1<F, G>,
  gh: Fn1<G, H>,
  ...rest: Array<void>
): Fn1<A, H>;

declare function pipe<A, B, C, D, E, F, G, H, I>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  de: Fn1<D, E>,
  ef: Fn1<E, F>,
  fg: Fn1<F, G>,
  gh: Fn1<G, H>,
  hi: Fn1<H, I>,
  ...rest: Array<void>
): Fn1<A, I>;

declare function pipe<A, B, C, D, E, F, G, H, I, J>(
  ab: Fn1<A, B>,
  bc: Fn1<B, C>,
  cd: Fn1<C, D>,
  de: Fn1<D, E>,
  ef: Fn1<E, F>,
  fg: Fn1<F, G>,
  gh: Fn1<G, H>,
  hi: Fn1<H, I>,
  ij: Fn1<I, J>,
  ...rest: Array<void>
): Fn1<A, J>;

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
 * @example
 * const takeEvensAndDouble = pipe(
 *   filter(n => n % 2 === 0),
 *   map(n => n * 2)
 * );
 *
 * takeEvensAndDouble(List.of(1, 2, 3))
 * // returns List [ 4 ]
 *
 * @param  {Array<Function>} operations any number of unary functions.
 * @return {Function}
 */
function pipe(...operations) {
  operations.forEach(_enforceFunction);
  return piped.bind(null, operations);
}

export default pipe;
