import { List, Map, Seq, Set } from "immutable";
import reduce from "../reduce";

describe("transmute/reduce", () => {
  it("reduces an Array", () => {
    expect(
      reduce(List(), (acc, n) => acc.push(n + 1), [1, 2, 3])
    ).toMatchSnapshot();
  });

  it("reduces a List", () => {
    expect(
      reduce(List(), (acc, n) => acc.push(n + 1), List.of(1, 2, 3))
    ).toMatchSnapshot();
  });

  it("reduces a Map", () => {
    expect(
      reduce(
        Map(),
        (acc, n, k) => acc.set(k, n + 1),
        Map({ one: 1, two: 2, three: 3 })
      )
    ).toMatchSnapshot();
  });

  it("reduces an Object", () => {
    expect(
      reduce(List(), (acc, n) => acc.push(n + 1), { one: 1, two: 2, three: 3 })
    ).toMatchSnapshot();
  });

  it("reduces a Seq", () => {
    expect(
      reduce(Seq(), (acc, n) => acc.concat([n + 1]), Seq.of(1, 2, 3))
    ).toMatchSnapshot();
  });

  it("reduces a Set", () => {
    expect(
      reduce(Set(), (acc, n) => acc.add(n + 1), Set.of(1, 2, 3))
    ).toMatchSnapshot();
  });

  it("reduces to a primitive", () => {
    expect(reduce(0)((acc, n) => acc + n)(List.of(1, 2, 3))).toMatchSnapshot();
  });
});
