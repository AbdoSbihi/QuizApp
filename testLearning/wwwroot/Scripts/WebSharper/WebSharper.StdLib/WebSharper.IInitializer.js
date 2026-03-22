export function isIInitializer(x){
  return"$init"in x&&"$postinit"in x&&"$preinit"in x;
}
