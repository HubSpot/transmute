import has from '../has';
import { Map, Set } from 'immutable';

describe('has', () => {
  it('checks in an Array', () => {
    const subject = [1, 2, 3];
    expect(has(0, subject)).toBe(true);
    expect(has(1, subject)).toBe(true);
    expect(has(2, subject)).toBe(true);
    expect(has(3, subject)).toBe(false);
  });

  it('checks in a Map', () => {
    const subject = Map({ one: 1, two: undefined });
    expect(has('one', subject)).toBe(true);
    expect(has('two', subject)).toBe(true);
    expect(has('three', subject)).toBe(false);
  });

  it('checks in a Set', () => {
    const subject = Set.of(1, 2, 3);
    expect(has(1, subject)).toBe(true);
    expect(has(2, subject)).toBe(true);
    expect(has(3, subject)).toBe(true);
    expect(has(4, subject)).toBe(false);
  });

  it('checks in an Object', () => {
    const subject = { one: 1, two: undefined };
    expect(has('one', subject)).toBe(true);
    expect(has('two', subject)).toBe(true);
    expect(has('three', subject)).toBe(false);
  });
});
