// @flow
import _count from './internal/_count';

/**
 * Returns true if `value` is "empty".
 * If given null, undefined, isEmpty will return true.
 *
 * @param {any} value
 * @return {boolean}
 */
export default function isEmpty(value: any): boolean {
  if (!value) {
    return true;
  }
  return _count(value) === 0;
}
