// @flow
import always from "../always";
import isFunction from "../isFunction";
import protocol from "../protocol";

export const Keyed = protocol("Keyed");

export const keySeq = Keyed.defineMethod({
  args: [
    protocol.TYPE // subject
  ],
  name: "keySeq"
});

export const mapKeys = Keyed.defineMethod({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "mapKeys"
});

export const merge = Keyed.defineMethod({
  args: [
    always(true), // updates
    protocol.TYPE // subject
  ],
  name: "merge"
});
