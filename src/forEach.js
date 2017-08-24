import curry from "./curry";
import { Iterable } from "immutable";
import { forEach } from "./protocols/Collection";

forEach.implement(Array, (effect, arr) => arr.forEach(effect));

forEach.implementInherited(Iterable, (effect, subject) =>
  subject.forEach(effect)
);

forEach.implement(Object, (effect, obj) => {
  const keys = Object.keys(obj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    effect(obj[key], key, obj);
  }
  return obj;
});

/**
 * Executes `effect` for each value in `subject`, then returns `subject`.
 * 
 * @param {Function} effect
 * @param {TYPE} subject
 * @return {TYPE}
 */
export default curry(forEach);
