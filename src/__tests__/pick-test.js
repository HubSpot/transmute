import { Map, Record } from "immutable";
import pick from "../pick";

describe("transmute/pick", () => {
  const takeOneAndThree = pick(["one", "three"]);

  it("selects keys from Maps", () => {
    expect(
      takeOneAndThree(Map({ one: 1, two: 2, three: 3 }))
    ).toMatchSnapshot();
  });

  it("selects keys from Object", () => {
    const testObject = {
      one: 1,
      two: 2,
      three: 3
    };
    expect(takeOneAndThree(testObject)).toMatchSnapshot();
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
    expect(takeOneAndThree(TestRecord())).toMatchSnapshot();
  });
});
