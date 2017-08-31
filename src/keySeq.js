import { Iterable, Seq } from 'immutable';
import { keySeq } from './internal/TransmuteCollection';

const jsToKeySeq = subject => Seq(subject).keySeq();

keySeq.implement(Array, jsToKeySeq);
keySeq.implementInherited(Iterable, subject => subject.keySeq());
keySeq.implement(Object, jsToKeySeq);

/**
 * Get a Seq of the keys in `subject`.
 *
 * @param  {Iterable|Object|Array} subject
 * @return {Seq}
 */
export default keySeq;
