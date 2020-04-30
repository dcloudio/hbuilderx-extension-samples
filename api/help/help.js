let hx = require('hbuilderx');

/**
 * @description 打开浏览器
 * @param {String} url
 */
function openBrowser(url) {
    var exec = require('child_process').exec;
    switch (process.platform) {
        case "darwin":
            exec('open ' + url);
            break;
        case "win32":
            exec('start ' + url);
            break;
        default:
            exec('xdg-open', [url]);
    }
}

/**
 * @description 打开帮助页面
 */
function openHelp() {
    openBrowser("https://hbuilderx.dcloud.net.cn")
}

module.exports = {
    openHelp
};
