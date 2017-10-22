import { Map } from 'immutable';
import updateIn from '../updateIn';

describe('transmute/updateIn', () => {
  const incTwo = updateIn(['one', 'two'], n => n + 1);

  it('updates a nested Map', () => {
    expect(
      incTwo(
        Map({
          one: Map({
            two: 2,
          }),
        })
      )
    ).toMatchSnapshot();
  });

  it('updates a nested Object', () => {
    expect(
      incTwo({
        one: {
          two: 2,
        },
      })
    ).toMatchSnapshot();
  });
});
