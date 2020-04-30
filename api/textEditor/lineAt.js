let hx = require('hbuilderx');

/**
 * @description lineAt
 */
function lineAt() {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		// 行号是从0开始
		let linePromise = editor.document.lineAt(2);
		linePromise.then((line)=>{
			console.log("TextLine is:", line.text);
			hx.window.showInformationMessage("第3行内容为：" + String(line.text));
		});
	});
}

module.exports = {
	lineAt
};