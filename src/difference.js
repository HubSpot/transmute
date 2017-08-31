import curry from './curry';
import filter from './filter';

function difference(toRemove, subject) {
  if (!toRemove) {
    return subject;
  }
  return filter.operation(value => !toRemove.contains(value), subject);
}

/**
 * Take the difference between one iterable and another iterable.
 * Only the elements present in just subject will remain.
 *
 * @param  {Iterable} toRemove
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(difference);
