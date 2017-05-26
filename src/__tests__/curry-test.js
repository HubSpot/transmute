import curry from "../curry";

describe("transmute/curry", () => {
  it("curries by the operation's length", () => {
    const twoArgs = curry((a, b) => [a, b]);
    expect(twoArgs(1)(2)).toEqual([1, 2]);
  });
});
