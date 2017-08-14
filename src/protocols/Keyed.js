// @flow
import always from "../always";
import isFunction from "../isFunction";
import protocol from "../protocol";

export const Keyed = protocol("Keyed");

/**
 * Return a `Seq` of the keys in `subject`.
 *
 * @param {TYPE<K, _>} subject
 * @return {Seq<K>}
 */
export const keySeq = Keyed.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "keySeq"
});

/**
 * Creates a new value by applying `mapper` to each _key_ in `subject`.
 *
 * @param {Function} mapper
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const mapKeys = Keyed.defineMethod({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "mapKeys"
});

/**
 * Creates a new value by setting each key-value pair in updates into `subject`.
 *
 * @param {any} updates
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const merge = Keyed.defineMethod({
  args: [
    always(true), // updates
    protocol.TYPE // subject
  ],
  name: "merge"
});
