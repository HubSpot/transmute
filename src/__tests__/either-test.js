import either from '../either';

describe('transmute/either', () => {
  const gtOne = n => n > 1;
  const ltNegOne = n => n < -1;
  const not0or1 = either(gtOne, ltNegOne);

  it('returns true if first is true', () => {
    expect(not0or1(2)).toBe(true);
  });

  it('returns true if second is true', () => {
    expect(not0or1(-2)).toBe(true);
  });

  it('returns false if both first and second are false', () => {
    expect(not0or1(0)).toBe(false);
  });
});
