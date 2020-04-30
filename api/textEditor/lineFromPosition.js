let hx = require('hbuilderx');

/**
 * @description lineFromPosition
 */
function lineFromPosition() {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		let linePromise = editor.document.lineFromPosition(editor.selection.active);
		linePromise.then((line)=>{
			console.log(line);
			console.log("TextLine is:", line.text, "开始位置：", line.start, "结束位置：", line.end);
			hx.window.setStatusBarMessage(line.text);
		});
	});
}

module.exports = {
	lineFromPosition
};