import { Iterable, Seq } from 'immutable';
import { valueSeq } from './TransmuteCollection';

const jsToValueSeq = subject => Seq(subject).valueSeq();

valueSeq.implement(Array, jsToValueSeq);
valueSeq.implementInherited(Iterable, subject => subject.valueSeq());
valueSeq.implement(Object, jsToValueSeq);

export default valueSeq;
