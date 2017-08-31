import curry from './curry';
import enforceFunction from './enforce/enforceFunction';
import enforceInterval from './enforce/enforceInterval';

function debounceImmediate(interval, operation) {
  enforceInterval(interval);
  enforceFunction(operation);

  let timer = null;
  let lastArgs;
  let lastCall = 0;
  let lastResult;

  function cancel() {
    clearTimeout(timer);
    timer = null;
  }

  function runner() {
    cancel();
    lastCall = Date.now();
    lastResult = operation(...lastArgs);
    return lastResult;
  }

  function immediatelyDebounced(...args) {
    lastArgs = args;
    if (timer) {
      cancel();
    }
    if (Date.now() - lastCall >= interval) {
      runner();
    } else {
      timer = setTimeout(runner, interval);
    }
    return lastResult;
  }

  immediatelyDebounced.cancel = cancel;

  return immediatelyDebounced;
}

/**
 * `operation` is called immediately and then `interval` milliseconds after the most
 * recent call.
 *
 * @param  {number} interval of milliseconds
 * @param  {Function} operation
 * @return {any} the most recent result of `operation`
 */
export default curry(debounceImmediate);
