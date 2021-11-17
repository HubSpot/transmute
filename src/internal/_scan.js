import { Iterable, List } from 'immutable';
import { scan } from './TransmuteCollection';
import entrySeq from './_entrySeq';

const scanEntries = (into, operation, src) =>
  entrySeq(src).reduce(
    ([acc, results], [key, val]) => {
      const res = operation(acc, val, key, src);
      return [res, results.push(res)];
    },
    [into, List([into])]
  )[1];

scan.implement(Object, scanEntries);
scan.implement(Array, scanEntries);
scan.implementInherited(Iterable, scanEntries);

export default scan;
