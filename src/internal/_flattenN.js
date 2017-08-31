import { Iterable } from 'immutable';
import { flattenN } from './TransmuteCollection';

flattenN.implementInherited(Iterable, (depth, subject) =>
  subject.flatten(depth)
);

export default flattenN;
