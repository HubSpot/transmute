import filterNot from '../filterNot';
import { List, Map, Record } from 'immutable';

describe('transmute/filterNot', () => {
  const takeOdd = filterNot(n => n % 2 === 0);

  it('filterNots Arrays', () => {
    expect(takeOdd([1, 2, 3])).toMatchSnapshot();
  });

  it('filterNots Lists', () => {
    expect(takeOdd(List.of(1, 2, 3))).toMatchSnapshot();
  });

  it('filterNots Maps', () => {
    expect(takeOdd(Map.of('one', 1, 'two', 2, 'three', 3))).toMatchSnapshot();
  });

  it('filterNots Objects', () => {
    expect(takeOdd({ one: 1, two: 2, three: 3 })).toMatchSnapshot();
  });

  it('filters Records into Maps', () => {
    const Test = Record({ one: 1, two: 2, three: 3 }, 'Test');
    expect(takeOdd(Test())).toMatchSnapshot();
  });
});
