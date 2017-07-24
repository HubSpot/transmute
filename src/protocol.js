// @flow
import _makeSymbol from "./internal/_makeSymbol";
import _setArity from "./internal/_setArity";
import isArray from "./isArray";
import uniqueId from "./uniqueId";

type ProtocolDefinition = {
  name: string
};

type MethodDefinition = {
  name: string,
  args: Array<Function | Symbol | string>,
  fallback?: Function
};

const DEFAULT_KEY = "__DEFAULT_IMPLMENTATION";
const DISPATCH_TYPE = _makeSymbol("protocolType");

function getKey(id, value) {
  switch (value) {
    case null:
    case undefined:
      return `${value}`;
    default:
      return value.constructor[id] || value[id];
  }
}

function makeKey(Type) {
  switch (Type) {
    case null:
      return "null";
    case undefined:
      return "undefined";
    default:
      return uniqueId();
  }
}

class Protocol {
  name: string;

  id: string | Symbol;

  methods: {
    [key: string]: MethodDefinition
  };

  implementations: {
    [key: string]: { [key: string]: Function }
  };

  constructor({ name }: ProtocolDefinition) {
    this.name = name;
    this.methods = {};
    this.implementations = {};
    const idName = `__p_${name}`;
    this.id = _makeSymbol(idName);
  }

  defineMethod({ args, name, fallback }: MethodDefinition) {
    if (this.methods[name]) {
      throw new Error(`defineMethod: \`${name}\` is already defined.`);
    }
    if (!isArray(args) && args[0] !== DISPATCH_TYPE) {
      throw new Error(
        `defineMethod: expected \`args\` to be an array but got \`${args.toString()}\`.`
      );
    }
    const method = _setArity(args.length, (...input) =>
      this.dispatch(name, args.indexOf(DISPATCH_TYPE), input)
    );
    this.methods[name] = method;
    this.implementations[name] = {};
    if (typeof fallback === "function") {
      this.implementations[name][DEFAULT_KEY] = fallback;
    }
    method.implement = this.implement.bind(this, name);
    method.implementInherited = this.implementInherited.bind(this, name);
    return method;
  }

  dispatch(name: string, dispatchValueIndex: number, args: Array<any>) {
    const dispatchValue = args[dispatchValueIndex];
    const dispatchKey = getKey(this.id, dispatchValue);
    const implementations = this.implementations[name];
    if (!implementations[dispatchKey] && !implementations[DEFAULT_KEY]) {
      throw new Error(
        `${this.name}.${name}: not implmented for type \`${dispatchValue}\``
      );
    }
    return implementations[dispatchKey || DEFAULT_KEY](...args);
  }

  implement(name: string, Type: ?Function, implementation: Function) {
    const key = makeKey(Type);
    if (Type !== undefined && Type !== null) {
      Type[this.id] = key;
      Object.defineProperty(Type.constructor, this.id, {
        configurable: false,
        enumerable: false,
        value: key,
        writable: true
      });
    }
    this.implementations[name][key] = implementation;
    return implementation;
  }

  implementInherited(name: string, Type: ?Function, implementation: Function) {
    const key = makeKey(Type);
    if (Type !== undefined && Type !== null) {
      Type[this.id] = key;
      Object.defineProperty(Type.prototype, this.id, {
        configurable: false,
        enumerable: false,
        value: key,
        writable: true
      });
    }
    this.implementations[name][key] = implementation;
    return implementation;
  }
}

export default function protocol(name: string) {
  return new Protocol({ name });
}

protocol.TYPE = DISPATCH_TYPE;
