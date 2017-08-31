import { Map } from 'immutable';
import getIn from '../getIn';

describe('transmute/getIn', () => {
  const getter = getIn(['one', 'two']);

  it('gets a keyPath from a Map', () => {
    expect(
      getter(
        Map({
          one: Map({
            two: Map({
              three: 3,
            }),
          }),
        })
      )
    ).toMatchSnapshot();
  });

  it('gets a keyPath from an Object', () => {
    expect(
      getter({
        one: {
          two: {
            three: 3,
          },
        },
      })
    ).toMatchSnapshot();
  });

  it('gets a keyPath from Immutables in JS Objects', () => {
    expect(
      getter({
        one: Map({
          two: {
            three: 3,
          },
        }),
      })
    ).toMatchSnapshot();
  });

  it('gets a keyPath from JS Objects within immutables', () => {
    expect(
      getter(
        Map({
          one: {
            two: {
              three: 3,
            },
          },
        })
      )
    ).toMatchSnapshot();
  });

  it('gets a keyPath from arrays', () => {
    expect(getIn([1, 2], [[], [1, 2, 3]])).toBe(3);
  });

  it('doesnt blow up when it encounters a `null` or `undefined`', () => {
    expect(getter(Map())).toBe(undefined);
    expect(getter({})).toBe(undefined);
  });
});
