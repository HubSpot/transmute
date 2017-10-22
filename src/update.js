import _get from './internal/_get';
import _set from './internal/_set';
import curry from './curry';

function update(key, updater, subject) {
  const value = _get(key, subject);
  return _set(updater(value), key, subject);
}

export default curry(update);
