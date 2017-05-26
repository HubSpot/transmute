// @flow

/**
 * Returns it's first argument.
 * @param {any}  thing
 * @return {any}
 */
export default function identity<T>(thing: T): T {
  return thing;
}
