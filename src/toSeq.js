// @flow
import { Seq } from 'immutable';
import type { Iterable } from 'immutable';

/**
 * Converts `subject` to a `Seq` if possible.
 *
 * @param  {Array|Iterable|Object|String} subject
 * @return {Seq}
 */
export default function toSeq<K, V>(
  subject: Array<V> | Iterable<K, V> | { [key: K]: V } | String
) {
  return Seq(subject);
}
