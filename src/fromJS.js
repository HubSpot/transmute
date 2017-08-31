// @flow
import { fromJS as fromJSBase } from 'immutable';

/**
 * A version of Immutable.fromJS that drops all but the first argument for
 * compatibility with other transmute functions like `map`.
 */
export default function fromJS<T>(json: T) {
  return fromJSBase(json);
}
