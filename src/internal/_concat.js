import { Iterable, Collection, Seq } from 'immutable';
import { concat } from './TransmuteCollection';

// Convert immutable indexes to plain JS indexes
concat.implement(Array, (update, subject) => {
  if (Iterable.isIterable(update)) {
    return subject.concat(update.toJS());
  }
  return subject.concat(update);
});

concat.implementInherited(Seq.Indexed, (update, subject) =>
  subject.concat(update)
);

concat.implementInherited(Collection.Indexed, (update, subject) =>
  subject.concat(update)
);

concat.implement(String, (update, subject) => subject.concat(update));

export default concat;
