// @flow
import _setArity from "./internal/_setArity";
import uniqueId from "./uniqueId";

type ProtocolDefinition = {
  name: string
};

type MethodDefinition = {
  name: string,
  arity?: number,
  fallback?: Function
};

const DEFAULT_KEY = "__DEFAULT_IMPLMENTATION";

function getKey(id, value) {
  switch (value) {
    case null:
    case undefined:
      return `${value}`;
    default:
      return value[id];
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
    this.id = typeof Symbol === "function" ? Symbol(idName) : uniqueId(idName);
  }

  defineMethod({ arity = 1, name, fallback }: MethodDefinition) {
    if (this.methods[name]) {
      throw new Error(`defineMethod: \`${name}\` is already defined.`);
    }
    const method = _setArity(arity, (...args) => this.dispatch(name, args));
    this.methods[name] = method;
    this.implementations[name] = {};
    if (typeof fallback === "function") {
      this.implementations[name][DEFAULT_KEY] = fallback;
    }
    method.implement = this.implement.bind(this, name);
    return method;
  }

  dispatch(name: string, args: Array<any>) {
    const dispatchValue = args[args.length - 1];
    const dispatchKey = getKey(this.id, dispatchValue);
    const implementations = this.implementations[name];
    if (!dispatchKey && !implementations[DEFAULT_KEY]) {
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
