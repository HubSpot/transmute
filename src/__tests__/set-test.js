import { Map } from 'immutable';
import set from '../set';

describe('set', () => {
  const setOne = set('one', 1);

  it('sets a key in a Map', () => {
    expect(setOne(Map())).toMatchSnapshot();
  });

  it('sets a key in an Object', () => {
    const original = {};
    const result = setOne({});
    expect(original).toEqual({});
    expect(result).not.toBe(original);
    expect(result).toMatchSnapshot();
  });
});
