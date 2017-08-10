// @flow
import always from "../always";
import protocol from "../protocol";

const any = always(true);

export const Settable = protocol("Settable");

export const set = Settable.defineMethod({
  args: [
    any, // value
    any, // key
    protocol.TYPE // subject
  ],
  name: "set"
});
