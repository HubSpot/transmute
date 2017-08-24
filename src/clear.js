import { Collection } from "immutable";
import { clear } from "./protocols/TransmuteCollection";

clear.implement(Array, () => []);
clear.implementInherited(Collection, subject => subject.clear());
clear.implement(Object, () => ({}));

/**
 * Returns an empty copy of `subject`.
 *
 * @param {Array|Collection|Object} subject
 * @return {Array|Collection|Object}
 */
export default clear;
