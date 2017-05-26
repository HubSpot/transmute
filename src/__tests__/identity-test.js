import identity from "../identity";

describe("transmute/identity", () => {
  it("returns the first arg", () => {
    expect(identity(1)).toBe(1);
  });
});
