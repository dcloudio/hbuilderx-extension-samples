let hx = require('hbuilderx');

/**
 * @description 清空状态栏消息
 */
function clearStatusBarMessage() {
	hx.window.clearStatusBarMessage()
}

module.exports = {
	clearStatusBarMessage
};
