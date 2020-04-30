let hx = require('hbuilderx');

/**
 * @description 打印uri所有信息
 */
function uri(value) {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		let uri = editor.document.uri;
		
    // 创建控制台输出
    let outputChannel = hx.window.createOutputChannel("uri");
    outputChannel.show();
    outputChannel.appendLine(JSON.stringify(uri,null,2));
	});
}

module.exports = {
	uri
};
