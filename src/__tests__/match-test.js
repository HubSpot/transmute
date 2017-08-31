import { Map } from 'immutable';
import match from '../match';

describe('transmute/match', () => {
  it('matches Maps', () => {
    const isMatch = match({ one: 1, three: 3 });
    expect(isMatch(Map({ one: 1, two: 2, three: 3 }))).toBe(true);
    expect(isMatch(Map({ one: 2, two: 3, three: 4 }))).toBe(false);
  });
});
