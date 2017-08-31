// @flow
import curry from './curry';

function bind<F: Function>(operation: F, context: Object): F {
  return operation.bind(context);
}

/**
 * Sets a function's `this` context. Similar to `Function.prototype.bind`.
 *
 * @param {Function} operation
 * @param {Object} context
 * @return {Function}
 */
export default curry(bind);
