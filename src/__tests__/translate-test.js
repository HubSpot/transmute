import { Map } from "immutable";
import translate from "../translate";

describe("transmute/translate", () => {
  it("takes keys flagged `true`", () => {
    const translation = translate({ one: true });
    expect(translation(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });

  it("renames keys with string values", () => {
    const translation = translate({ first: "one" });
    expect(translation(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });

  it("applies functions to the key", () => {
    const translation = translate({
      second: s => s.get("one") + 1
    });
    expect(translation(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
  });
});
