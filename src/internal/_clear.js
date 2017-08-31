import { Collection, Iterable, Seq } from 'immutable';
import { clear } from './TransmuteCollection';

clear.implement(Array, () => []);
clear.implementInherited(Collection, subject => subject.clear());
clear.implementInherited(Seq, seq => {
  if (Iterable.isKeyed(seq)) {
    return Seq.Keyed();
  }
  if (Iterable.isIndexed(seq)) {
    return Seq.Indexed();
  }
  return Seq.Set();
});
clear.implement(Object, () => ({}));

export default clear;
