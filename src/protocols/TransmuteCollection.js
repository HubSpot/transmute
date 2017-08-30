// @flow
import always from "../always";
import isFunction from "../isFunction";
import isNumber from "../isNumber";
import protocol from "../protocol";

const isAnyValue = always(true);

export const clear = protocol({
  args: [
    protocol.TYPE // subject
  ],
  name: "clear"
});

/**
 * @private
 * Returns the number of values in `subject`.
 *
 * @param {TYPE} subject
 * @return {number}
 */
export const count = protocol({
  args: [
    protocol.TYPE // subject
  ],
  name: "count"
});

/**
 * @private
 * Returns a Seq of key,value tuples (in JS Array)
 *
 * @param {TYPE}
 * @return {Seq<[any, any]>}
 */
export const entrySeq = protocol({
  args: [
    protocol.TYPE // subject
  ],
  name: "entrySeq"
});

/**
 * @private
 * Returns true if `predicate` returns `true` for _all_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const every = protocol({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "every"
});

/**
 * @private
 * Returns a new value of items in `subject` for which `predicate` returns `true`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 */
export const filter = protocol({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "filter"
});

export const flattenN = protocol({
  args: [
    isNumber, // depth
    protocol.TYPE // subject
  ],
  name: "flattenN"
});

export const forEach = protocol({
  args: [
    isFunction, // effect
    protocol.TYPE // subject
  ],
  name: "forEach"
});

export const has = protocol({
  args: [
    isAnyValue, // key
    protocol.TYPE
  ],
  name: "has"
});

/**
 * @private
 * Return a `Seq` of the keys in `subject`.
 *
 * @param {TYPE<K, _>} subject
 * @return {Seq<K>}
 */
export const keySeq = protocol({
  args: [
    protocol.TYPE // subject
  ],
  name: "keySeq"
});

/**
 * @private
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const map = protocol({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "map"
});

/**
 * @private
 * Creates a new value by applying `mapper` to each _key_ in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const mapKeys = protocol({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "mapKeys"
});

/**
 * @private
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const reduce = protocol({
  args: [
    isAnyValue, // accumulator
    isFunction, // reducer
    protocol.TYPE // subject
  ],
  name: "reduce"
});

/**
 * @private
 * Returns true if `predicate` returns `true` for _any_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const some = protocol({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "some"
});

/**
 * @private
 * Returns a copy of `subject` sorted according to `getSortValue`.
 *
 * @param {Function} getSortValue
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const sortBy = protocol({
  args: [
    isFunction, // getSortValue
    protocol.TYPE // subject
  ],
  name: "sortBy"
});

/**
 * @private
 * Return a `Seq` of the values in `subject`.
 *
 * @param {TYPE<_, V>} subject
 * @return {Seq<K>}
 */
export const valueSeq = protocol({
  args: [
    protocol.TYPE // subject
  ],
  name: "valueSeq"
});
