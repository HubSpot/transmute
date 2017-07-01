import { Iterable, Seq } from "immutable";
import { keySeq } from "./protocols/Keyed";

keySeq.implement(Iterable, subject => {
  return subject.keySeq();
});

keySeq.implement(Object, subject => {
  return Seq(subject).keySeq();
});

/**
 * Get a Seq of the keys in `value`.
 *
 * @param  {Iterable|Object|Array} value
 * @return {Seq}
 */
export default keySeq;
