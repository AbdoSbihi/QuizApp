export function isIWebSharperMvcService(x){
  return"WebSharper_AspNetCore_IWebSharperMvcService$Head"in x&&"WebSharper_AspNetCore_IWebSharperMvcService$Render"in x;
}
