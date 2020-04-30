let hx = require('hbuilderx');
var path = require('path');

/**
 * @description DiagnosticCollection - 创建问题集合
 */
function createDiagnosticCollection() {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		// 获取文件路径
		let file_url = editor.document.uri.fsPath;

		// 判断文件后缀
		var extname = path.extname(file_url);
		if (![".js", ".html", ".vue", ".css", ".ts"].includes(extname)) {
			hx.window.showErrorMessage("请在html或css或js或vue文件上进行操作");
		}
		// 创建问题集合
		let collections = [{
				column: 0,
				line: 3,
				message: "error for test",
				severity: 'error'
			},
			{
				column: 4,
				line: 5,
				message: "warning for test",
				severity: 'warn'
			}
		];
		let diagnostics = hx.languages.createDiagnosticCollection('eslint');
		diagnostics.set(file_url, collections);
	});
}

module.exports = {
	createDiagnosticCollection
};
