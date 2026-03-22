export function isIUserSession(x){
  return"WebSharper_Web_IUserSession$GetLoggedInUser"in x&&"WebSharper_Web_IUserSession$LoginUser"in x&&"WebSharper_Web_IUserSession$LoginUser_1"in x&&"WebSharper_Web_IUserSession$Logout"in x&&"WebSharper_Web_IUserSession$IsAvailable"in x;
}
