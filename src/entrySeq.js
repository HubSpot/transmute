import _entrySeq from './internal/_entrySeq';

/**
 * Get a Seq of the entries (i.e. [key, value] tuples) in `subject`.
 *
 * @example
 * entrySeq(Map({one: 1, two: 2}))
 * // returns Seq [ ['one', 1], ['two', 2] ]
 *
 * @param  {Array|Iterable|Object} subject
 * @return {Seq}
 */
export default _entrySeq;
