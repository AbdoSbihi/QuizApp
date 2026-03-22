import IDictionaryEnumerator from "./System.Collections.IDictionaryEnumerator"
import ICollection from "./System.Collections.ICollection"
export function isIDictionary(x):x is IDictionary
export default interface IDictionary extends ICollection {
  DAdd(a, b):void
  Clear():void
  ContainsKey(a):boolean
  GetEnumerator():IDictionaryEnumerator
  RemoveKey(a):void
  get IsFixedSize():boolean
  get IsReadOnly():boolean
  Item(a)
  get Keys():ICollection
  get Values():ICollection
  set_Item(a, b):void
}
