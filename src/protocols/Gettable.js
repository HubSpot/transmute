// @flow
import always from "../always";
import protocol from "../protocol";

/**
 * Return the value of `key` in `subject`.
 *
 * @param {any} key
 * @param {TYPE} subject
 * @return {any}
 */
export const get = protocol({
  args: [
    always(true), // key
    protocol.TYPE // subject
  ],
  name: "get",
  fallback: (key, obj) => obj[key]
});
