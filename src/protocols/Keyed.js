// @flow
import isFunction from "../isFunction";
import protocol from "../protocol";

export const Keyed = protocol("Keyed");

export const keySeq = Keyed.defineMethod({
  args: [protocol.TYPE],
  name: "keySeq"
});

export const mapKeys = Keyed.defineMethod({
  args: [isFunction, protocol.TYPE],
  name: "mapKeys"
});
