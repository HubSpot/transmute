import { Iterable, Seq } from 'immutable';
import { keySeq } from './TransmuteCollection';

const jsToKeySeq = subject => Seq(subject).keySeq();

keySeq.implement(Array, jsToKeySeq);
keySeq.implementInherited(Iterable, subject => subject.keySeq());
keySeq.implement(Object, jsToKeySeq);

export default keySeq;
