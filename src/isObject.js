// @flow

/**
 * Returns true if `value` is an Object.
 */
export default function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}
