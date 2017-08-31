import { Map } from 'immutable';
import match from '../match';

describe('transmute/match', () => {
  it('matches arrays', () => {
    const isMatch = match({ 0: 1, 2: 3 });
    expect(isMatch([1, 2, 3])).toBe(true);
    expect(isMatch([1, 2])).toBe(false);
  });

  it('matches Maps', () => {
    const isMatch = match({ one: 1, three: 3 });
    expect(isMatch(Map({ one: 1, two: 2, three: 3 }))).toBe(true);
    expect(isMatch(Map({ one: 2, two: 3, three: 4 }))).toBe(false);
  });

  it('matches Objects', () => {
    const isMatch = match(Map({ one: 1, three: 3 }));
    expect(isMatch({ one: 1, two: 2, three: 3 })).toBe(true);
    expect(isMatch({ one: 2, two: 3, three: 4 })).toBe(false);
  });
});
