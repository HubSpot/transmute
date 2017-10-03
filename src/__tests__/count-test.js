import count from '../count';
import { Seq } from 'immutable';

describe('count', () => {
  it('counts an Array', () => {
    expect(count([1, 2, 3])).toBe(3);
  });

  it('counts an Object', () => {
    expect(count({ one: 1, two: 2, three: 3 })).toBe(3);
  });

  it('counts a Seq', () => {
    expect(count(Seq.of(1, 2, 3))).toBe(3);
  });

  it('counts a String', () => {
    expect(count('test')).toBe(4);
  });
});
