// @flow

/**
 * Returns `true` if `subject` is a JavaScript Number and not `NaN`.
 * 
 * @param {any} value 
 * @return {boolean}
 */
export default function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}
