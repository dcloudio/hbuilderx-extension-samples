const hx = require('hbuilderx');

function login() {
    let prom = hx.authorize.login({
        appId: "xxxx",
        scopes: ['basic', 'email', 'phone']
    });
    prom.then(function(param) {
        console.log(param)
    });
}


function logout() {
    hx.authorize.onUserLogout(function(res){
        console.log(res);
    })
}

module.exports = {
    login,
    logout
};
