// @flow
import always from "../always";
import protocol from "../protocol";

const any = always(true);

/**
 * Set the `value` of `key` in `subject`.
 *
 * @param {any} value
 * @param {any} key
 * @param {TYPE} subject
 * @return {TYPE}
 */
export const set = protocol({
  args: [
    any, // value
    any, // key
    protocol.TYPE // subject
  ],
  name: "set"
});
