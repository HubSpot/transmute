import { Iterable } from 'immutable';
import { sortBy } from './TransmuteCollection';

sortBy.implementInherited(Iterable, (getSortValue, subject) =>
  subject.sortBy(getSortValue)
);

export default sortBy;
