import bind from '../bind';

describe('transmute/bind', () => {
  function fn() {
    return this;
  }

  it('binds `this`', () => {
    const context = { testing: true };
    expect(bind(fn, context)()).toBe(context);
  });

  it('is curried', () => {
    const binder = bind(fn);
    const contextA = { testing: 'yes' };
    expect(binder(contextA)()).toBe(contextA);
    const contextB = { testing: 'definitely' };
    expect(binder(contextB)()).toBe(contextB);
  });
});
