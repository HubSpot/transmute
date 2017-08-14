// @flow

/**
 * Returns true if `value` is a String.
 * 
 * @param {any} value
 * @return {boolean}
 */
export default function isString(value: any): boolean {
  return typeof value === "string";
}
