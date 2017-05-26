import { is, Seq } from "immutable";

/**
 * Like memoize, but only caches the most recent value.
 * It's often useful for caching expensive calculations in react components.
 *
 * @example
 * const sum = memoizeLast((...nums) => nums.reduce((acc, n) => acc + n));
 * sum(List.of(1, 2, 3))
 * //> does work, returns 6
 * sum(List.of(1, 2, 3))
 * //> takes cached value, returns 6
 * sum(List.of(4, 5, 6))
 * //> does work, returns 15
 * sum(List.of(1, 2, 3))
 * //> does work again, returns 6
 *
 * @param  {Function} operation
 * @return {Function}
 */
export default function memoizeLast(operation) {
  if (operation.length === 1) {
    let prevArg1;
    let prevResult1;
    return function memoizedLast1(arg) {
      if (prevArg1 === undefined || !is(arg, prevArg1)) {
        prevResult1 = operation(arg);
        prevArg1 = arg;
      }
      return prevResult1;
    };
  }

  let prevArgsN;
  let prevResultN;
  return function memoizedLastN(...args) {
    const argsN = Seq(args);
    if (prevArgsN === undefined || !is(argsN, prevArgsN)) {
      prevResultN = operation(...args);
      prevArgsN = argsN;
    }
    return prevResultN;
  };
}
