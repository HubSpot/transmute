import { Map } from "immutable";
import merge from "../merge";

describe("transmute/merge", () => {
  describe("Object", () => {
    it("merges with an Object", () => {
      expect(
        merge(
          {
            one: 3,
            three: 1
          },
          {
            one: 1,
            two: 2,
            three: 3
          }
        )
      ).toMatchSnapshot();
    });

    it("merges with a Map", () => {
      expect(
        merge(
          Map({
            one: 3,
            three: 1
          }),
          {
            one: 1,
            two: 2,
            three: 3
          }
        )
      ).toMatchSnapshot();
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
