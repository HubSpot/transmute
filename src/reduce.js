import curry from './curry';
import _reduce from './internal/_reduce';

/**
 * Transform the contents of `subject` to `into` by applying `operation` to each
 * item.
 *
 * @param  {any} into
 * @param  {Function} operation
 * @param  {Iterable} subject   [description]
 * @return {Iterable}
 */
export default curry(_reduce);
