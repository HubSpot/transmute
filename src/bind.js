// @flow
import curry from "./curry";

/**
 * Sets a function's `this` context. Similar to `Function.prototype.bind`.
 */
function bind<F: Function>(fn: F, context: Object): F {
  return fn.bind(context);
}

export default curry(bind);
