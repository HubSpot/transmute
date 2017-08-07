// @flow
import always from "../always";
import isFunction from "../isFunction";
import protocol from "../protocol";

export const Reducable = protocol("Reducable");

export const filter = Reducable.defineMethod({
  args: [isFunction, protocol.TYPE],
  name: "filter"
});

export const map = Reducable.defineMethod({
  args: [isFunction, protocol.TYPE],
  name: "map"
});

export const reduce = Reducable.defineMethod({
  args: [always(true), isFunction, protocol.TYPE],
  name: "reduce"
});
