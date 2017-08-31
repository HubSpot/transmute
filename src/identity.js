// @flow

/**
 * Returns it's first argument.
 *
 * @example
 * identity('something') === 'something'
 *
 * @param {any}  thing
 * @return {any}
 */
export default function identity<T>(thing: T): T {
  return thing;
}
