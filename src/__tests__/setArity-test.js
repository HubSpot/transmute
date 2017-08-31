import setArity from '../setArity';

describe('transmute/setArity', () => {
  it('is curried', () => {
    expect(setArity(3, () => {}).length).toBe(3);
    expect(setArity(3)(() => {}).length).toBe(3);
    expect(setArity()()(3)()(() => {}).length).toBe(3);
  });
});
