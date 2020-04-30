var hx = require("hbuilderx");

/**
 * @description 文档被修改时的事件
 */
function onDidChangeTextDocument() {
	let onDidChangeTextDocumentEventDispose = hx.workspace.onDidChangeTextDocument(function(event) {
		let document = event.document;
		console.log(document);
		// 获取文件路径与行数
		console.log("当前触发修改的文件路径为: ", document.uri);
		console.log("当前触发修改的文件行数为",document.lineCount);
	});
}

module.exports = {
	onDidChangeTextDocument
};