export function isIInitializer(x):x is IInitializer
export default interface IInitializer {
  $init(a:string):void
  $postinit(a:string):void
  $preinit(a:string):void
}
