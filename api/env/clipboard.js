let hx = require('hbuilderx');

/**
 * @description 写入剪切板
 * @createTime 2020-5-18 17:36:00
 */
function clipboardWrite() {
    hx.env.clipboard.writeText("Hello HBuilderX");
}

/**
 * @description 读取剪切板
 * @createTime 2020-5-18 17:36:00
 */
function clipboardRead() {
    var textPromise = hx.env.clipboard.readText();
    textPromise.then(function(res){
        console.log("当前剪切板内容为: ",res);
    })
}

module.exports = {
    clipboardWrite,
    clipboardRead
};
