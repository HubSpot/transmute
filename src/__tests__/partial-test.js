import partial from '../partial';

describe('transmute/partial', () => {
  const arrayOf = (...args) => args;

  it('throws if `operation` isnt a function', () => {
    expect(() => partial(null)).toThrow();
    expect(() => partial(() => {})).not.toThrow();
  });

  it('binds args', () => {
    expect(partial(arrayOf, 1, 2)(3)).toEqual([1, 2, 3]);
  });
});
