// @flow
import always from "../always";
import protocol from "../protocol";

export const Gettable = protocol("Gettable");

/**
 * Return the value of `key` in `subject`.
 *
 * @param {any} key
 * @param {TYPE} subject
 * @return {any}
 */
export const get = Gettable.defineMethod({
  args: [
    always(true), // key
    protocol.TYPE // subject
  ],
  name: "get",
  fallback: (key, obj) => obj[key]
});
