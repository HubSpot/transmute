// @flow

/**
 * Returns true if `value` is an Object.
 * 
 * @param {any} value
 * @return {boolean}
 */
export default function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}
