const hx = require('hbuilderx');

function login() {
    let prom = hx.authorize.login({
        appId: "xxxxxxxx",
        scopes: ['basic', 'email', 'phone']
    });
    prom.then(function(param) {
        console.log(prom)
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
