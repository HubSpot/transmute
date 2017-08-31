import { Iterable, Seq } from 'immutable';
import { entrySeq } from './TransmuteCollection';

const jsToEntrySeq = subject => Seq(subject).entrySeq();

entrySeq.implement(Array, jsToEntrySeq);
entrySeq.implementInherited(Iterable, subject => subject.entrySeq());
entrySeq.implement(Object, jsToEntrySeq);

export default entrySeq;
