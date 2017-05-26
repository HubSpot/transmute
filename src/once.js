/**
 * `fn` is only run one time.
 *
 * @param  {Function} fn
 * @return {any}      the result of the first time `fn` was called
 */
export default function once(fn) {
  let didRun = false;
  let result;
  return function onced(...args) {
    if (!didRun) {
      didRun = true;
      result = fn(...args);
    }
    return result;
  };
}
