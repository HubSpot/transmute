import { Map, Record } from "immutable";
import pick from "../pick";

describe("transmute/pick", () => {
  it("selects keys from Maps", () => {
    expect(
      pick(["one", "three"], Map({ one: 1, two: 2, three: 3 }))
    ).toMatchSnapshot();
  });

  it("selects keys from Records", () => {
    const TestRecord = Record(
      {
        one: 1,
        two: 2,
        three: 3
      },
      "TestRecord"
    );
    expect(pick(["one", "three"], TestRecord())).toMatchSnapshot();
  });
});
