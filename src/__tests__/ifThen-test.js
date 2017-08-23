import ifThen from "../ifThen";
import { List } from "immutable";

describe("transmute/ifThen", () => {
  const toJS = ifThen(
    subject => typeof subject.toJS === "function",
    subject => subject.toJS()
  );

  it("runs `affirmative` if `predicate(subject)` is truthy", () => {
    expect(toJS(List.of(1, 2, 3))).toEqual([1, 2, 3]);
  });

  it("returns `subject` if `predicate(subject)` is falsy", () => {
    expect(toJS([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
