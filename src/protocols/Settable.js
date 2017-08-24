// @flow
import always from "../always";
import protocol from "../protocol";

const any = always(true);

export const Settable = protocol("Settable");

/**
 * Set the `value` of `key` in `subject`.
 *
 * @param {any} value
 * @param {any} key
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const set = Settable.defineMethod({
  args: [
    any, // value
    any, // key
    protocol.TYPE // subject
  ],
  name: "set"
});
