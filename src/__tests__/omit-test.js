import { Map, Record } from "immutable";
import omit from "../omit";

describe("transmute/omit", () => {
  it("drops keys from Maps", () => {
    expect(
      omit(["one", "three"], Map({ one: 1, two: 2, three: 3 }))
    ).toMatchSnapshot();
  });

  it("drops keys from Records", () => {
    const TestRecord = Record(
      {
        one: 1,
        two: 2,
        three: 3
      },
      "TestRecord"
    );
    expect(omit(["one", "three"], TestRecord())).toMatchSnapshot();
  });
});
