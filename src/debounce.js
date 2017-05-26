import curry from "./curry";
import enforceFunction from "./enforce/enforceFunction";
import enforceInterval from "./enforce/enforceInterval";

/**
 * `operation` is called `interval` milliseconds after the most recent call.
 *
 * @param  {number} interval of milliseconds
 * @param  {Function} operation
 * @return {any} the most recent result of `operation`
 */
function debounce(interval, operation) {
  enforceInterval(interval);
  enforceFunction(operation);

  let lastArgs;
  let lastResult;
  let timer = null;

  function cancel() {
    clearTimeout(timer);
    timer = null;
  }

  function runner() {
    cancel();
    lastResult = operation(...lastArgs);
  }

  function debounced(...args) {
    lastArgs = args;
    cancel();
    timer = setTimeout(runner, interval);
    return lastResult;
  }

  debounced.cancel = cancel;

  return debounced;
}

export default curry(debounce);
