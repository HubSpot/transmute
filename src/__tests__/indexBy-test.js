import { List, Map } from "immutable";
import indexBy from "../indexBy";
import get from "../get";

describe("transmute/indexBy", () => {
  const getId = get("id");
  const indexById = indexBy(getId);

  it("indexes an Array", () => {
    const input = [Map({ id: "123" }), Map({ id: "456" })];
    expect(indexById(input)).toMatchSnapshot();
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

  it("indexes an Object", () => {
    expect(
      indexById({
        one: { id: "123" },
        two: { id: "456" }
      })
    ).toMatchSnapshot();
  });
});
