let hx = require('hbuilderx');

/**
 * @description getText - 获取指定区域内的文本
 */
function getText() {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		// 获取指定区域内的文本
		let text = editor.document.getText({
			start: 0, 
			end: 50
		});
		
		// 将获取到的内容输出到控制台
		let outputChannel = hx.window.createOutputChannel("getText");
		outputChannel.show();
		outputChannel.appendLine(text);
	});
}

module.exports = {
	getText
};