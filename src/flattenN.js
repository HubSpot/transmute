// @flow
import curry from './curry';
import _flattenN from './internal/_flattenN';

/**
 * Flattens an iterable `depth` levels.
 *
 * @example
 * // return List [ 1, List [ 2, 3 ], 4, 5, 6 ]
 * flattenN(1, List.of(List.of(1, List.of(2, 3)), List.of(4, 5, 6)));
 *
 * @param {number} depth
 * @param {Iterable} subject
 * @return {Iterable}
 */
export default curry(_flattenN);
