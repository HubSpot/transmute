// @flow
import curryN from "./curryN";
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
    const idName = `__PROTOCOL_${name}`;
    this.id = typeof Symbol === "function" ? Symbol(idName) : uniqueId(idName);
  }

  defineMethod({ arity = 1, name, fallback }: MethodDefinition) {
    if (this.methods[name]) {
      throw new Error(`defineMethod: \`${name}\` is already defined.`);
    }
    const method = curryN.operation(arity, (...args) =>
      this.dispatch(name, args)
    );
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
    const isEmpty = Type === null || Type === undefined;
    const key = isEmpty ? `${Type}` : uniqueId();
    if (!isEmpty) {
      Type[this.id] = key;
      Object.defineProperty(Type.prototype, this.id, {
        configurable: false,
        enumerable: false,
        value: key,
        writable: false
      });
    }
    this.implementations[name][key] = implementation;
    return implementation;
  }
}

export default function protocol(name: string) {
  return new Protocol({ name });
}
