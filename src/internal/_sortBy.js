import { Iterable, Seq } from 'immutable';
import { sortBy } from './TransmuteCollection';

sortBy.implement(Array, (getSortValue, arr) => {
  return Seq(arr)
    .sortBy(getSortValue)
    .toArray();
});

sortBy.implementInherited(Iterable, (getSortValue, subject) =>
  subject.sortBy(getSortValue)
);

sortBy.implement(Object, (getSortValue, obj) =>
  Seq(obj)
    .sortBy(getSortValue)
    .toObject()
);

export default sortBy;
