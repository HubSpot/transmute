import { Map } from 'immutable';
import mergeDeep from '../mergeDeep';

describe('transmute/mergeDeep', () => {
  describe('Object', () => {
    it('merges with an Object', () => {
      expect(
        mergeDeep(
          {
            one: 3,
            three: {
              a: 0,
              b: 1,
            },
          },
          {
            one: 1,
            two: 2,
            three: {
              a: 1,
            },
          }
        )
      ).toMatchSnapshot();
    });

    it('merges with a Map', () => {
      expect(
        mergeDeep(
          Map({
            one: 3,
            three: {
              a: 1,
            },
          }),
          {
            one: 1,
            two: 2,
            three: {
              a: 0,
              b: 1,
            },
          }
        )
      ).toMatchSnapshot();
    });
  });

  describe('Iterable', () => {
    const merger = mergeDeep({ one: 3, three: 1 });

    it('merges with an Object', () => {
      expect(
        merger(
          Map({
            one: 1,
            two: 2,
            three: {
              a: 0,
              b: 1,
            },
          })
        )
      ).toMatchSnapshot();
    });

    it('merges with a Map', () => {
      expect(
        merger(
          Map({
            one: 1,
            two: 2,
            three: {
              a: 0,
              b: 1,
            },
          })
        )
      ).toMatchSnapshot();
    });
  });
});
