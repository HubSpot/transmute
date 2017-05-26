import { Iterable, Seq } from "immutable";

/**
 * Get a Seq of the entries (i.e. [key, value] tuples) in `subject`.
 *
 * @param  {Array|Iterable|Object} subject
 * @return {Seq}
 */
export default function entrySeq(subject) {
  if (!Iterable.isIterable(subject)) {
    subject = Seq(subject);
  }
  return subject.entrySeq();
}
