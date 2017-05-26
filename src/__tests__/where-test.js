import { List, Map } from "immutable";
import where from "../where";

describe("transmute/where", () => {
  const mockColby = Map({
    name: "Colby",
    age: 24
  });
  const mockJill = Map({
    name: "Jill",
    age: 23
  });
  const mockShaun = Map({
    name: "Shaun",
    age: 23
  });
  const mockHayStack = List([mockColby, mockJill, mockShaun]);

  it("matches one item", () => {
    expect(where({ name: "Colby" }, mockHayStack)).toMatchSnapshot();
  });

  it("matches multiple items", () => {
    expect(where({ age: 23 }, mockHayStack)).toMatchSnapshot();
  });

  it("matches maps", () => {
    const subject = Map({
      colby: mockColby,
      jill: mockJill,
      shaun: mockShaun
    });
    expect(where({ age: 23 }, subject)).toMatchSnapshot();
  });
});
