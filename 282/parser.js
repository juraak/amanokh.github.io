
function user_login(){
    VK.Auth.login(function(session, status) {alert(session['user']['id'])}, 4);
}
