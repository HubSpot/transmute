import curry from "./curry";
import enforceFunction from "./enforce/enforceFunction";
import enforceInterval from "./enforce/enforceInterval";

function throttle(interval, operation) {
  enforceInterval(interval);
  enforceFunction(operation);

  let lastArgs;
  let lastResult;
  let lastCall = 0;
  let timer = null;

  function cancel() {
    clearTimeout(timer);
    timer = null;
  }

  function runner() {
    lastCall = Date.now();
    cancel();
    lastResult = operation(...lastArgs);
  }

  function throttled(...args) {
    lastArgs = args;
    if (Date.now() - lastCall >= interval) {
      runner();
    } else {
      timer = setTimeout(runner, interval);
    }
    return lastResult;
  }

  throttled.cancel = cancel;

  return throttled;
}

/**
 * Ensures `operation` is only called once every `interval` milliseconds.
 *
 * @param  {number} interval of milliseconds
 * @param  {Function} operation
 * @return {any} the most recent result of `operation`
 */
export default curry(throttle);
