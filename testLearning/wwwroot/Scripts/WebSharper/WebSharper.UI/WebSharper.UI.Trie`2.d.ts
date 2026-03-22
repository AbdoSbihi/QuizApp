import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
export interface TrieBranch<T0, T1>{
  $:0;
  $0:FSharpMap<T0, Trie<T0, T1>>;
}
export interface TrieEmpty<T0, T1>{
  $:1;
}
export interface TrieLeaf<T0, T1>{
  $:2;
  $0:T1;
}
export type Trie<T0, T1> = (TrieBranch<T0, T1> | TrieEmpty<T0, T1> | TrieLeaf<T0, T1>)
