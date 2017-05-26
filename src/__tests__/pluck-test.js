import { List, Map } from "immutable";
import pluck from "../pluck";

describe("transmute/pluck", () => {
  it("extracts the value of each key in each item", () => {
    expect(
      pluck("n", List.of(Map({ n: 1 }), Map({ n: 2 }), Map({ n: 3 })))
    ).toMatchSnapshot();
  });
});
