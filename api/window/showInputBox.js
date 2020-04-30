let hx = require('hbuilderx');

/**
 * @description 在屏幕中间显示输入框
 */
function showInputBox() {
	let inputPromise = hx.window.showInputBox({
		prompt: "请输入密码",
		value: '123456',
		password: true
	});
	inputPromise.then((result) => {
		hx.window.showInformationMessage("您输入的密码为:" + result);
	})
}

module.exports = {
	showInputBox
};