import { Map, OrderedMap } from "immutable";
import get from "../get";
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

  describe("compatibility", () => {
    const getThree = get("three");
    const translation = translate({
      one: true,
      second: "two",
      three: s => getThree(s) + 1
    });

    it("works with Maps", () => {
      expect(translation(Map({ one: 1, two: 2, three: 3 }))).toMatchSnapshot();
    });

    it("works with Objects", () => {
      expect(translation({ one: 1, two: 2, three: 3 })).toMatchSnapshot();
    });

    it("works with OrderedMaps", () => {
      expect(
        translation(OrderedMap({ one: 1, two: 2, three: 3 }))
      ).toMatchSnapshot();
    });
  });
});
