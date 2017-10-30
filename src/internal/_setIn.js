import _count from './_count';
import _has from './_has';
import _get from './_get';
import _keyedEquivalent from './_keyedEquivalent';
import _reduce from './_reduce';
import _set from './_set';

function makeSetStack(keyPath, subject) {
  return _reduce(
    [],
    (acc, key) => {
      if (!acc.length) {
        acc.push([subject, key]);
        return acc;
      }
      const [prevValue, prevKey] = acc[acc.length - 1];
      const actualValue = _get(prevKey, prevValue);
      const nextValue =
        actualValue === undefined && !_has(prevKey, prevValue)
          ? _keyedEquivalent(prevValue)
          : actualValue;
      acc.push([nextValue, key]);
      return acc;
    },
    keyPath
  );
}

export default function _setIn(keyPath, value, subject) {
  if (_count(keyPath) === 0) {
    return value;
  }
  const setStack = makeSetStack(keyPath, subject);
  let result = value;
  while (setStack.length > 0) {
    const [layer, key] = setStack.pop();
    result = _set(key, result, layer);
  }
  return result;
}
