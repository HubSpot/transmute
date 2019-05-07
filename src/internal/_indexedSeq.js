import { Iterable, Seq } from 'immutable';
import { indexedSeq } from './TransmuteCollection';

const jsToIndexedSeq = subject => Seq(subject).toIndexedSeq();

indexedSeq.implement(Array, jsToIndexedSeq);
indexedSeq.implementInherited(Iterable, subject => subject.toIndexedSeq());
indexedSeq.implement(Object, jsToIndexedSeq);

export default indexedSeq;
