import _filter from './internal/_filter';
import curry from './curry';
import { Seq } from 'immutable';

function without(unwanted, subject) {
  unwanted = Seq.Set(unwanted);
  return _filter(value => !unwanted.includes(value), subject);
}

/**
 * Removes items in `unwanted` from `subject`.
 *
 * @param  {Iterable} unwanted
 * @param  {Iterable} subject
 * @return {Iterable}
 */
export default curry(without);
