// @flow
import { fromJS as fromJSBase } from 'immutable';

/**
 * A version of Immutable.fromJS that drops all but the first argument for
 * compatibility with other transmute functions like `map`.
 *
 * @example
 * fromJS({items: [1, 2, 3]})
 * // returns Map { items: List [ 1, 2, 3 ] }
 *
 * @param {any} json
 * @return {?Iterable}
 */
export default function fromJS<T>(json: T) {
  return fromJSBase(json);
}
