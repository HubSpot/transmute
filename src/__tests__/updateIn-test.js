import { Map } from "immutable";
import updateIn from "../updateIn";

describe("transmute/updateIn", () => {
  it("updates a nested Map", () => {
    const incTwo = updateIn(["one", "two"], n => n + 1);
    expect(
      incTwo(
        Map({
          one: Map({
            two: 2
          })
        })
      )
    ).toMatchSnapshot();
  });
});
