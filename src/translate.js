import curry from "./curry";
import { Iterable, Map, Seq } from "immutable";

function isRecord(subject) {
  return (
    Iterable.isAssociative(subject) &&
    !Map.isMap(subject) &&
    !Seq.isSeq(subject)
  );
}

function translate(translation, subject) {
  const result = isRecord(subject) ? Map() : new subject.constructor();
  return result.withMutations(acc => {
    return Seq(translation).reduce((translated, transform, newKey) => {
      let newValue;
      if (typeof transform === "function") {
        newValue = transform(subject, newKey);
      } else if (transform === true) {
        newValue = subject.get(newKey);
      } else {
        newValue = Array.isArray(transform)
          ? subject.getIn(transform)
          : subject.get(transform);
      }
      return translated.set(newKey, newValue);
    }, acc);
  });
}

export default curry(translate);
