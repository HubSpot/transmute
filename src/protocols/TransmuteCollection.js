// @flow
import always from "../always";
import isFunction from "../isFunction";
import isNumber from "../isNumber";
import protocol from "../protocol";

export const TransmuteCollection = protocol("TransmuteCollection");

export const clear = TransmuteCollection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "clear"
});

/**
 * Returns the number of values in `subject`.
 *
 * @param {TYPE} subject
 * @return {number}
 */
export const count = TransmuteCollection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "count"
});

/**
 * Returns a Seq of key,value tuples (in JS Array)
 *
 * @param {TYPE}
 * @return {Seq<[any, any]>}
 */
export const entrySeq = TransmuteCollection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "entrySeq"
});

/**
 * Returns true if `predicate` returns `true` for _all_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const every = TransmuteCollection.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "every"
});

/**
 * Returns a new value of items in `subject` for which `predicate` returns `true`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 */
export const filter = TransmuteCollection.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "filter"
});

export const flattenN = TransmuteCollection.defineMethod({
  args: [
    isNumber, // depth
    protocol.TYPE // subject
  ],
  name: "flattenN"
});

export const forEach = TransmuteCollection.defineMethod({
  args: [
    isFunction, // effect
    protocol.TYPE // subject
  ],
  name: "forEach"
});

export const has = TransmuteCollection.defineMethod({
  args: [
    always(true), // key
    protocol.TYPE
  ],
  name: "has"
});

/**
 * Return a `Seq` of the keys in `subject`.
 *
 * @param {TYPE<K, _>} subject
 * @return {Seq<K>}
 */
export const keySeq = TransmuteCollection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "keySeq"
});

/**
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const map = TransmuteCollection.defineMethod({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "map"
});

/**
 * Creates a new value by applying `mapper` to each _key_ in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const mapKeys = TransmuteCollection.defineMethod({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "mapKeys"
});

/**
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const reduce = TransmuteCollection.defineMethod({
  args: [
    always(true), // accumulator
    isFunction, // reducer
    protocol.TYPE // subject
  ],
  name: "reduce"
});

/**
 * Returns true if `predicate` returns `true` for _any_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const some = TransmuteCollection.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "some"
});

/**
 * Returns a copy of `subject` sorted according to `getSortValue`.
 *
 * @param {Function} getSortValue
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const sortBy = TransmuteCollection.defineMethod({
  args: [
    isFunction, // getSortValue
    protocol.TYPE // subject
  ],
  name: "sortBy"
});

/**
 * Return a `Seq` of the values in `subject`.
 *
 * @param {TYPE<_, V>} subject
 * @return {Seq<K>}
 */
export const valueSeq = TransmuteCollection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "valueSeq"
});
