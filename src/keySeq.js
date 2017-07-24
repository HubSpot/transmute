import { Iterable, Seq } from "immutable";
import { keySeq } from "./protocols/Keyed";

function fromJS(subject) {
  return Seq(subject).keySeq();
}

keySeq.implement(Array, fromJS);
keySeq.implement(Object, fromJS);

keySeq.implementInherited(Iterable, subject => subject.keySeq());

/**
 * Get a Seq of the keys in `value`.
 *
 * @param  {Iterable|Object|Array} value
 * @return {Seq}
 */
export default keySeq;
