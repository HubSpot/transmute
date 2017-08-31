import _flattenN from './internal/_flattenN';

/**
 * Flattens an iterable as deeply as possible.
 *
 * @example
 * // return List [ 1, 2, 3, 4, 5, 6 ]
 * flatten(List.of(List.of(1, List.of(2, 3)), List.of(4, 5, 6)));
 *
 * @param {Iterable} subject
 * @return {Iterable}
 */
export default function flatten(subject) {
  return _flattenN(Infinity, subject);
}
