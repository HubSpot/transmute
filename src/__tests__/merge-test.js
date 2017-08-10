import { Map } from "immutable";
import merge from "../merge";

describe("transmute/merge", () => {
  describe("Object", () => {
    const merger = merge({ one: 3, three: 1 });

    it("merges with an Object", () => {
      merger({
        one: 1,
        two: 2,
        three: 3
      });
    });
  });

  describe("Iterable", () => {
    const merger = merge({ one: 3, three: 1 });

    it("merges with an Object", () => {
      expect(
        merger(
          Map({
            one: 1,
            two: 2,
            three: 3
          })
        )
      ).toMatchSnapshot();
    });

    it("merges with a Map", () => {
      expect(
        merger(
          Map({
            one: 1,
            two: 2,
            three: 3
          })
        )
      ).toMatchSnapshot();
    });
  });
});
