import { Map, Record } from "immutable";
import omit from "../omit";

describe("transmute/omit", () => {
  const dropOneAndThree = omit(["one", "three"]);

  it("drops keys from Maps", () => {
    expect(
      dropOneAndThree(Map({ one: 1, two: 2, three: 3 }))
    ).toMatchSnapshot();
  });

  it("drops keys from Objects", () => {
    expect(dropOneAndThree({ one: 1, two: 2, three: 3 })).toMatchSnapshot();
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
    expect(dropOneAndThree(TestRecord())).toMatchSnapshot();
  });
});
