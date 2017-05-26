import toSeq from "../toSeq";

describe("transmute/toSeq", () => {
  it("converts to a sequence", () => {
    expect(toSeq([1, 2, 3])).toMatchSnapshot();
    expect(toSeq("123")).toMatchSnapshot();
  });
});
