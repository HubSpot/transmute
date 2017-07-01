// @flow
import protocol from "../protocol";

export const Keyed = protocol("Keyed");

export const keySeq = Keyed.defineMethod({
  arity: 1,
  name: "keySeq"
});

export const mapKeys = Keyed.defineMethod({
  arity: 2,
  name: "mapKeys"
});

export const omit = Keyed.defineMethod({
  arity: 2,
  name: "omit"
});

export const pick = Keyed.defineMethod({
  arity: 2,
  name: "pick"
});
