import { Iterable, List, Seq } from 'immutable';
import { concat } from './TransmuteCollection';

// Convert immutable indexes to plain JS indexes
concat.implement(Array, (update, subject) => {
  if (Iterable.isIterable(update)) {
    return subject.concat(update.toJS());
  }
  return subject.concat(update);
});

concat.implementInherited(Iterable, (update, subject) =>
  subject.concat(update)
);

concat.implement(String, (update, subject) => subject.concat(update));

export default concat;
