import forEach from '../forEach';
import { List, Map } from 'immutable';

describe('forEach', () => {
  it('iterates over an Array', () => {
    const effect = jest.fn();
    const arr = [1, 2, 3];
    forEach(effect, arr);
    expect(effect).toBeCalledWith(1, 0, arr);
    expect(effect).toBeCalledWith(2, 1, arr);
    expect(effect).toBeCalledWith(3, 2, arr);
  });

  it('iterates over a List', () => {
    const effect = jest.fn();
    const list = List.of(1, 2, 3);
    forEach(effect, list);
    expect(effect).toBeCalledWith(1, 0, list);
    expect(effect).toBeCalledWith(2, 1, list);
    expect(effect).toBeCalledWith(3, 2, list);
  });

  it('iterates over a Map', () => {
    const effect = jest.fn();
    const map = Map({
      one: 1,
      two: 2,
      three: 3,
    });
    forEach(effect, map);
    expect(effect).toBeCalledWith(1, 'one', map);
    expect(effect).toBeCalledWith(2, 'two', map);
    expect(effect).toBeCalledWith(3, 'three', map);
  });

  it('iterates over an Object', () => {
    const effect = jest.fn();
    const obj = {
      one: 1,
      two: 2,
      three: 3,
    };
    forEach(effect, obj);
    expect(effect).toBeCalledWith(1, 'one', obj);
    expect(effect).toBeCalledWith(2, 'two', obj);
    expect(effect).toBeCalledWith(3, 'three', obj);
  });
});
