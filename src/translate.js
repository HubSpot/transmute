import _get from './internal/_get';
import _reduce from './internal/_reduce';
import _set from './internal/_set';
import curry from './curry';
import { Map } from 'immutable';
import getIn from './getIn';
import isRecord from './isRecord';

const getInOp = getIn.operation;

function runTransform(transform, newKey, subject) {
  if (typeof transform === 'function') {
    return transform(subject, newKey);
  }
  if (transform === true) {
    return _get(newKey, subject);
  }
  if (Array.isArray(transform)) {
    return getInOp(transform, subject);
  }
  return _get(transform, subject);
}

function translate(translation, subject) {
  const result = isRecord(subject) ? Map() : new subject.constructor();
  return _reduce(
    result,
    (acc, transform, newKey) =>
      _set(newKey, runTransform(transform, newKey, subject), acc),
    translation
  );
}

export default curry(translate);
