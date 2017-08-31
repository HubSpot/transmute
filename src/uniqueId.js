// @flow
let nextId = 0;

/**
 * Returns a unique integer string appended to `prefix`.
 */
export default function uniqueId(prefix: string = '') {
  return `${prefix}${nextId++}`;
}
