// @flow
import always from "../always";
import isFunction from "../isFunction";
import protocol from "../protocol";

export const Reducable = protocol("Reducable");

/**
 * Returns true if `predicate` returns `true` for _all_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const every = Reducable.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "every"
});

/**
 * Returns true if `predicate` returns `true` for _any_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const some = Reducable.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "some"
});

/**
 * Returns a new value of items in `subject` for which `predicate` returns `true`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 */
export const filter = Reducable.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "filter"
});

/**
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const map = Reducable.defineMethod({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "map"
});

/**
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const reduce = Reducable.defineMethod({
  args: [
    always(true), // accumulator
    isFunction, // reducer
    protocol.TYPE // subject
  ],
  name: "reduce"
});
