import type { Iterable } from "immutable";

/**
 * Flattens an iterable `depth` levels.
 *
 * @example
 * // return List [ 1, 2, 3, 4, 5, 6 ]
 * flatten(List.of(List.of(1, List.of(2, 3)), List.of(4, 5, 6)));
 */
export default function flatten<K, V>(subject: Iterable<K, V>) {
  return subject.flatten(false);
}
