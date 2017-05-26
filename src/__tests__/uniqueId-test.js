import uniqueId from "../uniqueId";

describe("transmute/uniqueId", () => {
  it("returns an incrementing ingeter string", () => {
    expect(uniqueId()).toBe("0");
    expect(uniqueId()).toBe("1");
    expect(uniqueId()).toBe("2");
  });

  it("returns a prefixed string", () => {
    expect(uniqueId("test-")).toBe("test-3");
  });
});
