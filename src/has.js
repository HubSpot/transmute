import curry from "./curry";
import { has } from "./protocols/Gettable";
import { Iterable } from "immutable";

has.implement(Array, (key, arr) => {
  return arr.hasOwnProperty(key);
});

has.implementInherited(Iterable, (key, subject) => subject.has(key));

has.implement(Object, (key, obj) => {
  return obj.hasOwnProperty(key);
});

export default curry(has);
