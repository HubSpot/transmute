export type Fn1<A, B> = (a: A, ...rest: Array<void>) => B;
export type Fn2<A, B, C> = (a: A, b: B, ...rest: Array<void>) => C;
export type Fn3<A, B, C, D> = (a: A, b: B, c: C, ...rest: Array<void>) => D;
export type Fn4<A, B, C, D, E> = (
  a: A,
  b: B,
  c: C,
  d: D,
  ...rest: Array<void>
) => E;
export type Fn5<A, B, C, D, E, F> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  ...rest: Array<void>
) => F;
export type Fn6<A, B, C, D, E, F, G> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  ...rest: Array<void>
) => G;
export type Fn7<A, B, C, D, E, F, G, H> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  ...rest: Array<void>
) => H;
export type Fn8<A, B, C, D, E, F, G, H, I> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  ...rest: Array<void>
) => I;
export type Fn9<A, B, C, D, E, F, G, H, I, L> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  ...rest: Array<void>
) => L;

export type Endomorphism<A> = Fn1<A, A>;
