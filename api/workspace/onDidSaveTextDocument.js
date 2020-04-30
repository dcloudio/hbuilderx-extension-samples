var hx = require("hbuilderx");

/**
 * @description 文档被保存时的事件
 */
function onDidSaveTextDocument() {
	let onDidSaveTextDocumentEventDispose = hx.workspace.onDidSaveTextDocument(function(event) {
		console.log(event);
		// 获取文件路径与行数
		console.log("当前触发保存的文件路径为: ", event.uri.fsPath);
		console.log("当前触发保存的文件行数为",event.lineCount);
	});
}

module.exports = {
	onDidSaveTextDocument
};