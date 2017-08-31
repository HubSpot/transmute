import { Iterable, Seq } from 'immutable';
import { entrySeq } from './protocol/TransmuteCollection';

const jsToEntrySeq = subject => Seq(subject).entrySeq();

entrySeq.implement(Array, jsToEntrySeq);
entrySeq.implementInherited(Iterable, subject => subject.entrySeq());
entrySeq.implement(Object, jsToEntrySeq);

/**
 * Get a Seq of the entries (i.e. [key, value] tuples) in `subject`.
 *
 * @param  {Array|Iterable|Object} subject
 * @return {Seq}
 */
export default entrySeq;
