import _filter from './internal/_filter';
import curry from './curry';
import { Seq } from 'immutable';

function without(unwanted, subject) {
  unwanted = Seq.Set(unwanted);
  return _filter(value => !unwanted.includes(value), subject);
}

/**
 * Removes values in `unwanted` from `subject`.
 *
 * @example
 * const removeOne = without(Set.of(1));
 *
 * removeOne(Set.of(1, 2, 3)) // returns Set { 2, 3 }
 *
 *
 * @param  {Iterable} unwanted
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(without);
