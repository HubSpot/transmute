import { List, Map } from "immutable";
import indexBy from "../indexBy";
import get from "../get";

describe("transmute/indexBy", () => {
  const indexById = indexBy(get("id"));

  it("indexes an Array", () => {
    expect(
      indexById([Map({ id: "123" }), Map({ id: "456" })])
    ).toMatchSnapshot();
  });

  it("indexes a List", () => {
    expect(
      indexById(List.of(Map({ id: "123" }), Map({ id: "456" })))
    ).toMatchSnapshot();
  });

  it("indexes a Map", () => {
    expect(
      indexById(
        Map({
          one: Map({ id: "123" }),
          two: Map({ id: "456" })
        })
      )
    ).toMatchSnapshot();
  });
});
