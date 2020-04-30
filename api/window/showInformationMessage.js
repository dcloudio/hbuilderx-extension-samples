let hx = require('hbuilderx');

/**
 * @description 窗口右下角info通知框
 */
function showInformationMessage() {
	let resultPromise = hx.window.showInformationMessage('这是一个 Information 相关的通知框。 <a href="http://www.dcloud.io">DCloud官网</a>', ['我知道了','取消']);
	resultPromise.then((result) => {
		if (result === '我知道了') {
			console.log('您点击的是: 我知道了');
		} else if (result === '取消') {
			console.log("您点击的是: 取消");
		}
	});
}

module.exports = {
	showInformationMessage
};
