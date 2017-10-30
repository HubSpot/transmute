import _get from './_get';

export default function _getIn(keyPath, subject) {
  let value = subject;
  for (let i = 0; i < keyPath.length; i++) {
    if (value === undefined) {
      break;
    }
    value = _get(keyPath[i], value);
  }
  return value;
}
