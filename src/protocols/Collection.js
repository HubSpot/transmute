// @flow
import always from "../always";
import isFunction from "../isFunction";
import isNumber from "../isNumber";
import protocol from "../protocol";

export const Collection = protocol("Collection");

export const clear = Collection.defineMethod({
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
export const count = Collection.defineMethod({
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
export const entrySeq = Collection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "entrySeq"
});

/**
 * Return a `Seq` of the keys in `subject`.
 *
 * @param {TYPE<K, _>} subject
 * @return {Seq<K>}
 */
export const keySeq = Collection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "keySeq"
});

/**
 * Return a `Seq` of the values in `subject`.
 *
 * @param {TYPE<_, V>} subject
 * @return {Seq<K>}
 */
export const valueSeq = Collection.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "valueSeq"
});

/**
 * Returns true if `predicate` returns `true` for _all_ items in `subject`.
 *
 * @param {Function} predicate
 * @param {TYPE} subject
 * @return {bool}
 */
export const every = Collection.defineMethod({
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
export const some = Collection.defineMethod({
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
export const filter = Collection.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "filter"
});

export const flattenN = Collection.defineMethod({
  args: [
    isNumber, // depth
    protocol.TYPE // subject
  ],
  name: "flattenN"
});

export const forEach = Collection.defineMethod({
  args: [
    isFunction, // effect
    protocol.TYPE // subject
  ],
  name: "forEach"
});

/**
 * Returns a new value by applying `mapper` to each item in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const map = Collection.defineMethod({
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
export const mapKeys = Collection.defineMethod({
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
export const reduce = Collection.defineMethod({
  args: [
    always(true), // accumulator
    isFunction, // reducer
    protocol.TYPE // subject
  ],
  name: "reduce"
});

/**
 * Returns a copy of `subject` sorted according to `getSortValue`.
 *
 * @param {Function} getSortValue
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const sortBy = Collection.defineMethod({
  args: [
    isFunction, // getSortValue
    protocol.TYPE // subject
  ],
  name: "sortBy"
});
