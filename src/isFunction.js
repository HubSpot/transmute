// @flow

/**
 * Returns true if `value` is a Function.
 * 
 * @param {any} value
 * @return {boolean}
 */
export default function isFunction(value: any): boolean {
  return typeof value === "function";
}
