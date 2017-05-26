import curry from "./curry";
import { Seq } from "immutable";

/**
 * Removes items in `unwanted` from `subject`.
 *
 * @param  {Iterable} unwanted
 * @param  {Iterable} subject
 * @return {Iterable}
 */
function without(unwanted, subject) {
  unwanted = Seq.Set(unwanted);
  return subject.filterNot(value => unwanted.includes(value));
}

export default curry(without);
