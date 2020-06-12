// @flow
import _makeSymbol from './internal/_makeSymbol';
import _setArity from './internal/_setArity';
import uniqueId from './uniqueId';

type ProtocolDefinition = {
  name: string,
  args: Array<Function | Symbol | string>,
  fallback?: Function,
};

const DISPATCH_TYPE = _makeSymbol('protocolType');

function getValueKey(id, value) {
  switch (value) {
    case null:
    case undefined:
      return `${value}`;
    default:
      return (value.constructor && value.constructor[id]) || value[id];
  }
}

function makeKey(id, Type) {
  switch (Type) {
    case null:
      return 'null';
    case undefined:
      return 'undefined';
    default:
      return Type[id] || uniqueId();
  }
}

function makeKeyInherited(id, Type) {
  switch (Type) {
    case null:
      return 'null';
    case undefined:
      return 'undefined';
    default:
      return Type.prototype.hasOwnProperty(id)
        ? Type.prototype[id]
        : uniqueId();
  }
}

function setKey(subject: Object, id, key) {
  Object.defineProperty(subject, id, {
    configurable: false,
    enumerable: false,
    value: key,
    writable: true,
  });
  return subject;
}

export default function protocol({ args, name, fallback }: ProtocolDefinition) {
  const dispatchValueIndex = args.indexOf(DISPATCH_TYPE);
  const id = _makeSymbol(`__p_${name}`);
  const implementations: { [key: string]: Function } = {};

  const dispatch = _setArity(args.length, (...argValues) => {
    const value = argValues[dispatchValueIndex];
    const key = getValueKey(id, value);
    const implementation = (key && implementations[key]) || fallback;
    if (!implementation) {
      throw new Error(`${name}: not implemented for type \`${value}\``);
    }
    return implementation(...argValues);
  });

  dispatch.implement = (Type: Function, implementation: Function) => {
    const key = makeKey(id, Type);
    if (Type !== undefined && Type !== null && !Type[id]) {
      setKey(Type, id, key);
    }
    implementations[key] = implementation;
    return implementation;
  };

  dispatch.implementInherited = (Type: Function, implementation: Function) => {
    const key = makeKeyInherited(id, Type);
    if (
      Type !== undefined &&
      Type !== null &&
      !Type.prototype.hasOwnProperty(id)
    ) {
      setKey(Type.prototype, id, key);
    }
    implementations[key] = implementation;
    return implementation;
  };

  return dispatch;
}

protocol.TYPE = DISPATCH_TYPE;
