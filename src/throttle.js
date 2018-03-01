import curry from './curry';
import _enforceFunction from './internal/_enforceFunction';
import _enforceInterval from './internal/_enforceInterval';

function throttle(interval, operation) {
  _enforceInterval(interval);
  _enforceFunction(operation);

  let lastArgs;
  let lastResult;
  let lastCall = 0;
  let timer = null;

  function cancel() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function runner() {
    lastCall = Date.now();
    lastResult = operation(...lastArgs);
  }

  function throttled(...args) {
    lastArgs = args;
    cancel();
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
