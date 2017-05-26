// @flow
export default function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}
