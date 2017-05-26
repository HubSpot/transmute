import curry from "./curry";
import enforceFunction from "./enforce/enforceFunction";
import { Iterable } from "immutable";

/**
 * Like `transmute/partial`, but takes an Array or Iterable of arguments to pass
 * to `operation` rather than a dynamic number of args. Unlike `partial` it is
 * curried.
 *
 * partial : partialApply :: Function.prototype.call : Function.prototype.apply
 *
 * @example
 * const add = (a, b, c) => a + b + c;
 * const add11 = partialApply(add, [5, 6]);
 * add11(7); // returns 18
 *
 * @param  {Function}  operation  the function to bind.
 * @param  {Array|Iterable}  args  ordered collection of arguments to bind to `fn`.
 * @return {Function}
 */
function partialApply(operation, args) {
  enforceFunction(operation);
  const isArray = Array.isArray(args);
  if (!isArray && !Iterable.isOrdered(args)) {
    throw new Error(
      `expected \`args\` to be an Array or OrderedIterable but got \`${args}\``
    );
  }

  const arrayArgs = isArray ? args : args.toArray();
  return operation.bind(null, ...arrayArgs);
}

export default curry(partialApply);
