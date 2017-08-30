import hasIn from "../hasIn";
import { Map } from "immutable";

describe("transmute/hasIn", () => {
  const hasTwo = hasIn(["one", "two"]);

  it("returns true if key is defined", () => {
    expect(
      hasTwo(
        Map({
          one: {
            two: 2
          }
        })
      )
    ).toBe(true);
  });

  it("returns false if it hits an undefined step", () => {
    expect(
      hasIn(
        ["nothing", "two", "other"],
        Map({
          one: {
            two: 2
          }
        })
      )
    ).toBe(false);
  });

  it("returns false if last key is undefined in parent", () => {
    expect(
      hasIn(
        ["one", "three"],
        Map({
          one: {
            two: 2
          }
        })
      )
    ).toBe(false);
  });
});
