import { Iterable, Seq } from "immutable";
import { keySeq } from "./protocols/Keyed";

keySeq.implementInherited(Object, subject => Seq(subject).keySeq());

keySeq.implementInherited(Iterable, subject => subject.keySeq());

/**
 * Get a Seq of the keys in `value`.
 *
 * @param  {Iterable|Object|Array} value
 * @return {Seq}
 */
export default keySeq;
