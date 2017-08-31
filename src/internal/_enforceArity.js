// @flow
export default function enforceArity(arity: number) {
  if (arity >= 0 && arity <= 9) {
    return arity;
  }
  throw new Error(`expected \`arity\` from 0 to 9 but got \`${arity}\``);
}
