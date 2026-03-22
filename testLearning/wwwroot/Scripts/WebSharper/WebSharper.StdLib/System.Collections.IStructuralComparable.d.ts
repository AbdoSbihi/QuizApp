import IComparer from "./System.Collections.IComparer"
export function isIStructuralComparable(x):x is IStructuralComparable
export default interface IStructuralComparable {
  SCompareTo(a, b:IComparer):number
}
