import IEnumerable from "./System.Collections.IEnumerable"
export function isICollection(x):x is ICollection
export default interface ICollection extends IEnumerable { }
