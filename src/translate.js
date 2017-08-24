import curry from "./curry";
import { Map } from "immutable";
import get from "./get";
import getIn from "./getIn";
import isRecord from "./isRecord";
import reduce from "./reduce";
import set from "./set";

const getOp = get.operation;
const getInOp = getIn.operation;
const reduceOp = reduce.operation;
const setOp = set.operation;

function runTransform(transform, newKey, subject) {
  if (typeof transform === "function") {
    return transform(subject, newKey);
  }
  if (transform === true) {
    return getOp(newKey, subject);
  }
  if (Array.isArray(transform)) {
    return getInOp(transform, subject);
  }
  return getOp(transform, subject);
}

function translate(translation, subject) {
  const result = isRecord(subject) ? Map() : new subject.constructor();
  return reduceOp(
    result,
    (acc, transform, newKey) =>
      setOp(runTransform(transform, newKey, subject), newKey, acc),
    translation
  );
}

export default curry(translate);
