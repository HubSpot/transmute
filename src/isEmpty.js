// @flow
import { Iterable } from "immutable";

/**
 * Returns true if `value` is "empty".
 * If given null, undefined, isEmpty will return true.
 */
export default function isEmpty(value: any): boolean {
  if (!value) {
    return true;
  }
  if (Iterable.isIterable(value)) {
    return value.size === 0;
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (value.constructor === Object) {
    return Object.keys(value).length === 0;
  }
  return false;
}
