// @flow
export default function enforceInterval(interval: number) {
  if (typeof interval === 'number' && interval >= 0) {
    return interval;
  }

  throw new Error(
    `expected \`interval\` to be a positive number but got \`${interval}\``
  );
}
