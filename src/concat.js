import curry from './curry';
import _concat from './internal/_concat';

/**
 * Joins two `Iterable` objects together.
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
export default curry(_concat);
