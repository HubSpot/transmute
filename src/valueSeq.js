import { Iterable, Seq } from 'immutable';
import { valueSeq } from './protocol/TransmuteCollection';

const jsToValueSeq = subject => Seq(subject).valueSeq();

valueSeq.implement(Array, jsToValueSeq);
valueSeq.implementInherited(Iterable, subject => subject.valueSeq());
valueSeq.implement(Object, jsToValueSeq);

/**
 * Get a Seq of the values in `subject`.
 *
 * @param  {Iterable|Object|Array} subject
 * @return {Seq}
 */
export default valueSeq;
