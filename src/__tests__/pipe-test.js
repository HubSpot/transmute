import pipe from "../pipe";

describe("transmute/pipe", () => {
  it("throws if any arguments are not functions", () => {
    expect(() => {
      pipe(() => {}, null, () => {});
    }).toThrow();
    expect(() => {
      pipe(() => {}, () => {});
    }).not.toThrow();
  });

  it("runs the functions left to right", () => {
    const toThree = pipe(a => a.concat(1), a => a.concat(2), a => a.concat(3));
    expect(toThree([])).toEqual([1, 2, 3]);
  });
});
