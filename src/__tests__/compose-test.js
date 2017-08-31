import compose from '../compose';

describe('transmute/compose', () => {
  it('throws if any arguments are not functions', () => {
    expect(() => {
      compose(() => {}, null, () => {});
    }).toThrow();
    expect(() => {
      compose(() => {}, () => {});
    }).not.toThrow();
  });

  it('runs the functions right to left', () => {
    const toThree = compose(
      a => a.concat(1),
      a => a.concat(2),
      a => a.concat(3)
    );
    expect(toThree([])).toEqual([3, 2, 1]);
  });
});
