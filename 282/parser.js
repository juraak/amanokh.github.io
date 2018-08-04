VK.init({
    apiId: 6651530
  });
function user_login(){
    VK.Auth.login(user_registered, 8192);
}