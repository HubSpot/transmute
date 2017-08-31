import _keySeq from './internal/_keySeq';

/**
 * Get a Seq of the keys in `subject`.
 *
 * @example
 * keySeq({one: 1, two: 2, three: 3})
 * // returns Seq [ 'one', 'two', 'three' ]
 *
 * @param  {Iterable|Object|Array} subject
 * @return {Seq}
 */
export default _keySeq;
