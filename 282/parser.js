
function user_login(){
    VK.Auth.login(user_registered, 8192);
}
function user_registered(session, status){
    alert(session['user']['id']);
}