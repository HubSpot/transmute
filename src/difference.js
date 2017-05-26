import curry from "./curry";

/**
 * Take the difference between one iterable and another iterable.
 * Only the elements present in just subject will remain.
 *
 * @param  {Iterable} toRemove
 * @param  {Iterable} subject
 * @return {Iterable}
 */
function difference(toRemove, subject) {
  if (!toRemove) {
    return subject;
  }
  return subject.filter(value => !toRemove.contains(value));
}

export default curry(difference);
