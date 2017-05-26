import enforceFunction from "./enforce/enforceFunction";

/**
 * Like `fn.bind()`, but without the option to pass `context`.
 *
 * `partial` is _not_ curried.
 *
 * const add = (a, b, c) => a + b + c;
 * const add11 = partial(add, 5, 6);
 * add11(7); // returns 18
 *
 * @param  {Function} operation  the function to bind.
 * @param  {any} first the first argument to pass to `operation`
 * @param  {Array<any>} ...args  any number of other arguments to pass to `operation`
 * @return {Function}
 */
function partial(operation, first, ...args) {
  enforceFunction(operation);
  return operation.bind(null, first, ...args);
}

export default partial;
