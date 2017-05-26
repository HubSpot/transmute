import curry from "./curry";
import { Iterable, Seq } from "immutable";

/**
 * Transform the contents of `subject` to `into` by applying `operation` to each
 * item.
 *
 * @param  {any} into
 * @param  {Function} operation
 * @param  {Iterable} subject   [description]
 * @return {Iterable}
 */
function reduce(into, operation, subject) {
  if (!Iterable.isIterable(into) || Seq.isSeq(into)) {
    return subject.reduce(operation, into);
  }
  return into.withMutations(result => subject.reduce(operation, result));
}

export default curry(reduce);
