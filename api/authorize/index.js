const hx = require('hbuilderx');

function login() {
    let prom = hx.authorize.login({
        appId: "Hl9DHrNwyc",
        scopes: ['basic', 'email', 'phone'],
        description: "这个是申请权限描述......."
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
