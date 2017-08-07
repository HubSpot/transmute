// @flow
import always from "../always";
import protocol from "../protocol";

export const Gettable = protocol("Gettable");

export const get = Gettable.defineMethod({
  args: [always(true), protocol.TYPE],
  name: "get",
  fallback: (key, obj) => obj[key]
});
