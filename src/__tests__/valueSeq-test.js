import { Map } from 'immutable';
import valueSeq from '../valueSeq';

describe('transmute/valueSeq', () => {
  it('gets the values from a Map', () => {
    expect(valueSeq(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });

  it('gets the values from an Array', () => {
    expect(valueSeq([1, 2, 3])).toMatchSnapshot();
  });

  it('gets the values from an Object', () => {
    expect(valueSeq({ one: 1, two: 2, three: 3 })).toMatchSnapshot();
  });
});
