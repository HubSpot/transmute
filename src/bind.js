// @flow
import curry from "./curry";

function bind<F: Function>(fn: F, context: Object): F {
  return fn.bind(context);
}

/**
 * Sets a function's `this` context. Similar to `Function.prototype.bind`.
 */
export default curry(bind);
