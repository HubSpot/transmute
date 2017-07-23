// @flow
import protocol from "../protocol";

export const Gettable = protocol("Gettable");

export const get = Gettable.defineMethod({
  args: [() => true, protocol.TYPE],
  name: "get",
  fallback: (key, obj) => obj[key]
});
