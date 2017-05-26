// @flow
import curry from "./curry";
import type { Iterable } from "immutable";

/**
 * Flattens an iterable `depth` levels.
 *
 * @example
 * // return List [ 1, List [ 2, 3 ], 4, 5, 6 ]
 * flattenN(1, List.of(List.of(1, List.of(2, 3)), List.of(4, 5, 6)));
 */
function flattenN(depth: number, subject: Iterable<*, *>) {
  if (typeof depth !== "number" || depth <= 0) {
    throw new Error(
      `expected \`depth\` to be a number greater than 0 but got \`${depth}\``
    );
  }
  return subject.flatten(depth);
}

export default curry(flattenN);
