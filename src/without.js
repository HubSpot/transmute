import curry from "./curry";
import { Seq } from "immutable";
import filterNot from "./filterNot";

function without(unwanted, subject) {
  unwanted = Seq.Set(unwanted);
  return filterNot.operation(value => unwanted.includes(value), subject);
}

/**
 * Removes items in `unwanted` from `subject`.
 *
 * @param  {Iterable} unwanted
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(without);
