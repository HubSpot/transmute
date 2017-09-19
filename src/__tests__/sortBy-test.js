import { List, Map } from 'immutable';
import sortBy from '../sortBy';

describe('transmute/sortBy', () => {
  const modSort = sortBy(n => n % 2);

  it('sorts an Array', () => {
    expect(modSort([1, 2, 3, 10])).toEqual([2, 10, 1, 3]);
  });

  it('sorts a List', () => {
    expect(modSort(List.of(1, 2, 3, 10))).toMatchSnapshot();
  });

  it('sorts a Map into an OrderedMap', () => {
    expect(modSort(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });

  it('sorts an Object', () => {
    expect(modSort({ one: 1, two: 2, three: 3, ten: 10 })).toEqual({
      two: 2,
      ten: 10,
      one: 1,
      three: 3,
    });
  });
});
