import { Collection, Iterable, Map, Seq } from 'immutable';
import { keyedEquivalent } from './TransmuteCollection';

const makeObject = () => ({});

keyedEquivalent.implement(Array, makeObject);
keyedEquivalent.implement(Object, makeObject);
keyedEquivalent.implementInherited(Collection, () => Map());
keyedEquivalent.implementInherited(Seq, () => Seq.Keyed());

export default keyedEquivalent;
