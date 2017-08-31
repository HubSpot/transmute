import { List, Map } from 'immutable';
import sortBy from '../sortBy';

describe('transmute/sortBy', () => {
  const modSort = sortBy(n => n % 2);

  it('sorts a List', () => {
    expect(modSort(List.of(1, 2, 3))).toMatchSnapshot();
  });

  it('sorts a Map into an OrderedMap', () => {
    expect(modSort(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });
});
