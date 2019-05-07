import _reduce from './internal/_reduce';
import _set from './internal/_set';
import _keySeq from './internal/_keySeq';
import _indexedSeq from './internal/_indexedSeq';
import curry from './curry';

import { Iterable, Seq } from 'immutable';

function concat(update, subject) {
  if (!subject || !update) {
    return subject;
  }

  const isKeyed = Iterable.isKeyed(subject);
  const iters = [subject].concat(update).map(iter => {
    if (!Iterable.isIterable(iter)) {
      iter = isKeyed
        ? _keySeq(iter)
        : _indexedSeq(Array.isArray(iter) ? iter : [iter]);
    } else if (isKeyed) {
      iter = Iterable.Keyed(iter);
    }
    return iter;
  });

  if (iters.length === 0) {
    return subject;
  }

  let concatSeq = Seq(iters);
  if (isKeyed) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!Iterable.isIndexed(subject)) {
    concatSeq = concatSeq.toSetSeq();
  }

  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce((sum, seq) => {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);

  return Seq.isSeq(subject) ? subject : subject.constructor(concatSeq);
}

/**
 * Extends `Iterable`
 *
 * @example
 * // returns List([1, 2, 3])
 * concat(
 *   List([3]),
 *   List([1, 2])
 * );
 *
 * @param  {Iterable} update appends to `subject`.
 * @param  {Iterable} subject the thing to update.
 * @return {Iterable} with containing values from both `subject` and `update`.
 */
export default curry(concat);
