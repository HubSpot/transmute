import { Iterable, Seq } from "immutable";

/**
 * Get a Seq of the values in `value`.
 */
export default function valueSeq<V>(
  value: Array<V> | Iterable<any, V> | { [key: any]: V }
) {
  if (!Iterable.isIterable(value)) {
    value = Seq(value);
  }
  return value.valueSeq();
}
