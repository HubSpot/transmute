import { Iterable, Seq } from "immutable";

/**
 * Get a Seq of the keys in `value`.
 *
 * @param  {Iterable|Object|Array} value
 * @return {Seq}
 */
export default function keySeq<K>(
  value: Array<*> | Iterable<K, *> | { [key: K]: * }
) {
  if (!Iterable.isIterable(value)) {
    value = Seq(value);
  }
  return value.keySeq();
}
