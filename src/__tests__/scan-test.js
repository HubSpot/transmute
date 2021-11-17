import { List, Map, Seq, Set } from 'immutable';
import scan from '../scan';

describe('transmute/scan', () => {
  it('scans an Array', () => {
    const scanner = jest.fn((acc, n) => acc.push(n + 1));
    expect(scan(List(), scanner, [1, 2, 3])).toMatchSnapshot();
    expect(scanner.mock.calls.length).toBe(3);
    expect(scanner.mock.calls[0]).toEqual([List(), 1, 0, [1, 2, 3]]);
    expect(scanner.mock.calls[1]).toEqual([List.of(2), 2, 1, [1, 2, 3]]);
    expect(scanner.mock.calls[2]).toEqual([List.of(2, 3), 3, 2, [1, 2, 3]]);
  });

  it('scans a List', () => {
    expect(
      scan(List(), (acc, n) => acc.push(n + 1), List.of(1, 2, 3))
    ).toMatchSnapshot();
  });

  it('scans a Map', () => {
    expect(
      scan(
        Map(),
        (acc, n, k) => acc.set(k, n + 1),
        Map({ one: 1, two: 2, three: 3 })
      )
    ).toMatchSnapshot();
  });

  it('scans an Object', () => {
    expect(
      scan(List(), (acc, n) => acc.push(n + 1), { one: 1, two: 2, three: 3 })
    ).toMatchSnapshot();
  });

  it('scans a Seq', () => {
    expect(
      scan(Seq(), (acc, n) => acc.concat([n + 1]), Seq([1, 2, 3]))
    ).toMatchSnapshot();
  });

  it('scans a Set', () => {
    expect(
      scan(Set(), (acc, n) => acc.add(n + 1), Set.of(1, 2, 3))
    ).toMatchSnapshot();
  });

  it('scans to a primitive', () => {
    expect(scan(0)((acc, n) => acc + n)(List.of(1, 2, 3))).toMatchSnapshot();
  });
});
