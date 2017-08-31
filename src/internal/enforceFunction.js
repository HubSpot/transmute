// @flow
export default function enforceFunction(operation: mixed, index?: number) {
  if (typeof operation === 'function') {
    return operation;
  }

  const name = typeof index === 'number' ? `operation[${index}]` : 'operation';
  throw new Error(
    `expected \`${name}\` to be a function but got \`${String(operation)}\``
  );
}
