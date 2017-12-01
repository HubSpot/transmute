import { Map } from 'immutable';
import isEmpty from '../isEmpty';

describe('transmute/isEmpty', () => {
  describe('Immutable.Map', () => {
    it('returns true if empty', () => {
      expect(isEmpty(Map())).toEqual(true);
    });

    it('returns false if non-empty', () => {
      expect(isEmpty(Map({ a: 'test' }))).toEqual(false);
    });
  });

  describe('Object', () => {
    it('returns true if empty', () => {
      expect(isEmpty({})).toEqual(true);
    });

    it('returns false if not empty', () => {
      expect(isEmpty({ a: 'test' })).toEqual(false);
    });
  });

  describe('Array', () => {
    it('returns true if empty', () => {
      expect(isEmpty([])).toBe(true);
    });

    it('returns false if not empty', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });
  });

  describe('falsey values', () => {
    [undefined, null, '', NaN].forEach(value => {
      it(`returns true for \`${value}\``, () => {
        expect(isEmpty(value)).toEqual(true);
      });
    });
  });

  describe('Numbers', () => {
    it('returns true if falsy', () => {
      expect(isEmpty(0)).toBe(true);
    });

    it('returns false if truthy', () => {
      expect(isEmpty(1234)).toBe(false);
    });
  });
});
