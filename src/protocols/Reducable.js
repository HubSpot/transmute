// @flow
import always from "../always";
import isFunction from "../isFunction";
import protocol from "../protocol";

export const Reducable = protocol("Reducable");

export const every = Reducable.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "every"
});

export const some = Reducable.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "some"
});

export const filter = Reducable.defineMethod({
  args: [
    isFunction, // predicate
    protocol.TYPE // subject
  ],
  name: "filter"
});

export const map = Reducable.defineMethod({
  args: [
    isFunction, // mapper
    protocol.TYPE // subject
  ],
  name: "map"
});

export const reduce = Reducable.defineMethod({
  args: [
    always(true), // accumulator
    isFunction, // reducer
    protocol.TYPE // subject
  ],
  name: "reduce"
});
