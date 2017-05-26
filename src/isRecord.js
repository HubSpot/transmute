// @flow
import { Iterable, Map, Seq } from "immutable";

/**
 * Returns `true` if `subject` is an instance of a Record.
 */
export default function isRecord(subject: any): boolean {
  return (
    Iterable.isKeyed(subject) && !Map.isMap(subject) && !Seq.isSeq(subject)
  );
}
