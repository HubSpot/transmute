// @flow
import uniqueId from '../uniqueId';

export default function _makeSymbol(name: string) {
  return typeof Symbol === 'function' ? Symbol(name) : uniqueId(name);
}
