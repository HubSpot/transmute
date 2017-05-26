import curry from "./curry";
import { is, Seq } from "immutable";

function match(pattern, candidate) {
  return Seq(pattern).every((val, key) => {
    return candidate.has(key) && is(val, candidate.get(key));
  });
}

export default curry(match);
