import { Iterable, List, Map, OrderedSet, Set } from "immutable";
import isFunction from "../isFunction";
import protocol from "../protocol";

describe("protocol", () => {
  describe("unimplmented types", () => {
    it("throws if no implementation is defined", () => {
      const Testable = protocol("Testable");
      const isTestable = Testable.defineMethod({
        name: "isTestable",
        args: [protocol.TYPE]
      });
      expect(() => isTestable({})).toThrow();
    });

    it("uses the fallback if available", () => {
      const Stringable = protocol("Stringable");
      const stringify = Stringable.defineMethod({
        name: "stringify",
        args: [protocol.TYPE],
        fallback: thing => thing.toString()
      });
      expect(stringify({})).toBe("[object Object]");
    });
  });

  describe("empty types", () => {
    const Stringable = protocol("Stringable");
    const stringify = Stringable.defineMethod({
      name: "stringify",
      args: [protocol.TYPE],
      fallback: thing => thing.toString()
    });

    stringify.implement(null, () => "this is null");
    stringify.implement(undefined, () => "this is undefined");

    it("dispatches to null", () => {
      expect(stringify(null)).toBe("this is null");
    });

    it("dispatches to undefined", () => {
      expect(stringify(undefined)).toBe("this is undefined");
    });
  });

  describe("constructor types", () => {
    const Countable = protocol("Countable");
    const count = Countable.defineMethod({
      name: "count",
      args: [protocol.TYPE]
    });

    count.implement(Array, arr => arr.length);
    count.implement(Map, map => map.size);
    count.implement(Number, n => n);
    count.implement(String, str => str.length);
    count.implementInherited(Iterable, iter => iter.count());

    const isEmpty = Countable.defineMethod({
      name: "isEmpty",
      args: [protocol.TYPE]
    });

    isEmpty.implement(Array, arr => arr.length === 0);
    isEmpty.implement(Map, map => map.size === 0);
    isEmpty.implement(Number, n => n === 0);
    isEmpty.implement(String, str => str.length === 0);
    isEmpty.implementInherited(Iterable, iter => iter.count() === 0);

    it("dispatches based on the values type", () => {
      expect(count([1, 2, 3])).toBe(3);
      expect(count(Map({ one: 1, two: 2 }))).toBe(2);
      expect(count(10)).toBe(10);
      expect(count("omg123")).toBe(6);
    });

    it("dispatches based on a values super type", () => {
      expect(count(Set.of(1, 2, 3, 4))).toBe(4);
      // this works because `OrderedSet() instaceof Set === true`
      expect(count(OrderedSet.of(1, 2, 3, 4))).toBe(4);
    });
  });

  describe("additional arguments", () => {
    const Mappable = protocol("Mappable");
    const map = Mappable.defineMethod({
      name: "map",
      args: [isFunction, protocol.TYPE],
      fallback: (mapper, iter) => iter.map(mapper)
    });

    map.implement(List, (mapper, list) => list.map(mapper));
    // an implementation for `Object` ends up applying to _everything_
    map.implement(Object, (mapper, object) => {
      return Object.keys(object).reduce((acc, key) => {
        acc[key] = mapper(object[key], key, object);
        return acc;
      }, new object.constructor());
    });

    it("passes through the correct args", () => {
      const inc = n => n + 1;
      expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4]);
      expect(map(inc, List.of(1, 2, 3))).toEqual(List.of(2, 3, 4));
      expect(map(inc, { one: 1, two: 2, three: 3 })).toEqual({
        one: 2,
        two: 3,
        three: 4
      });
    });

    it("ignores extraneous args", () => {
      const inc = n => n + 1;
      expect(map(inc, { one: 1, two: 2, three: 3 }, "test", 123)).toEqual({
        one: 2,
        two: 3,
        three: 4
      });
    });
  });
});
