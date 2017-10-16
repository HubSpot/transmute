import _clear from './internal/_clear';
import _count from './internal/_count';
import _has from './internal/_has';
import _get from './internal/_get';
import _reduce from './internal/_reduce';
import _set from './internal/_set';
import curry from './curry';

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
          ? _clear(prevValue)
          : actualValue;
      acc.push([nextValue, key]);
      return acc;
    },
    keyPath
  );
}

function setIn(value, keyPath, subject) {
  if (_count(keyPath) === 0) {
    return value;
  }
  const setStack = makeSetStack(keyPath, subject);
  let result = value;
  while (setStack.length > 0) {
    const [layer, key] = setStack.pop();
    result = _set(result, key, layer);
  }
  return result;
}

export default curry(setIn);
