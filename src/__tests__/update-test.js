import { Map } from 'immutable';
import update from '../update';

describe('transmute/update', () => {
  const incCount = update('count', n => n + 1);

  it('updates a Map', () => {
    expect(incCount(Map({ count: 1 }))).toMatchSnapshot();
  });

  it('updates an object', () => {
    expect(incCount({ count: 1 })).toMatchSnapshot();
  });
});
