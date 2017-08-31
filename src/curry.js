// @flow
/* eslint-disable no-redeclare, no-undef */
import curryN from './curryN';

export type CurriedFn2<A, B, C> = Fn1<A, Fn1<B, C>> & Fn2<A, B, C>;

export type CurriedFn3<A, B, C, D> = Fn1<A, CurriedFn2<B, C, D>> &
  Fn2<A, B, Fn1<C, D>> &
  Fn3<A, B, C, D>;

export type CurriedFn4<A, B, C, D, E> = Fn1<A, CurriedFn3<B, C, D, E>> &
  Fn2<A, B, CurriedFn2<C, D, E>> &
  Fn3<A, B, C, Fn1<D, E>> &
  Fn4<A, B, C, D, E>;

export type CurriedFn5<A, B, C, D, E, F> = Fn1<A, CurriedFn4<B, C, D, E, F>> &
  Fn2<A, B, CurriedFn3<C, D, E, F>> &
  Fn3<A, B, C, CurriedFn2<D, E, F>> &
  Fn4<A, B, C, D, Fn1<E, F>> &
  Fn5<A, B, C, D, E, F>;

declare function curry<A, B, C>(f: Fn2<A, B, C>): CurriedFn2<A, B, C>;

declare function curry<A, B, C, D>(f: Fn3<A, B, C, D>): CurriedFn3<A, B, C, D>;

declare function curry<A, B, C, D, E>(
  f: Fn4<A, B, C, D, E>
): CurriedFn4<A, B, C, D, E>;

declare function curry<A, B, C, D, E, F>(
  f: Fn5<A, B, C, D, E, F>
): CurriedFn5<A, B, C, D, E, F>;

/**
 * Creates a curried version of `operation`.
 *
 * @example
 * const toArray = curry((a, b, c) => [a, b, c]);
 * const toArrayWith1 = toArray(1);
 * toArrayWith1(2, 3) === [1, 2, 3];
 *
 * @param  {Function} operation
 * @return {Function}
 */
function curry(operation: Function) {
  return curryN(operation.length, operation);
}

export default curry;
