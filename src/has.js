import curry from "./curry";
import { Iterable } from "immutable";
import { has } from "./protocols/TransmuteCollection";

has.implement(Array, (key, arr) => {
  return arr.hasOwnProperty(key);
});

has.implementInherited(Iterable, (key, subject) => subject.has(key));

has.implement(Object, (key, obj) => {
  return obj.hasOwnProperty(key);
});

export default curry(has);
