let hx = require('hbuilderx');

/**
 * @description 打开浏览器
 * @param {String} url
 * @createTime 2020-5-18 17:36:00
 */
function openExternal(url) {
    var openPromise = hx.env.openExternal(url);
    openPromise.then(function(res){
        console.log("--",res);
    })
}

module.exports = {
    openExternal
};
