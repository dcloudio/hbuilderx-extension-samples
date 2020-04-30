var hx = require("hbuilderx");

/**
 * @description 文档即将要保存的事件
 */
function onWillSaveTextDocument() {
	let willSaveTextDocumentEventDispose = hx.workspace.onWillSaveTextDocument(function(event) {
		let document = event.document;
		
		// 获取文件路径与行数
		console.log("当前触发保存的文件路径为: ", document.uri.fsPath);
		console.log("当前触发保存的文件行数为",document.lineCount);
	});
}

module.exports = {
	onWillSaveTextDocument
};