let hx = require('hbuilderx');

/**
 * @description TextEditor
 */
function textEditor(property) {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		
		// 获取文件对象
		if (property == "document") {
			let fname = editor.document.fileName;
			let msg_fname = "当前打开的文件是：" + String(fname) + "\n"; 
			
			let lineCount = editor.document.lineCount;
			let msg_line = "文档总行数" + String(lineCount) + "\n";
			
			let language = editor.document.languageId;
			let msg_language = "它是一个 " + language + "项目\n";
			
			let isUntitled = editor.document.isUntitled;
			let msg_isUntitled = "是否是无标题文件: " + String(isUntitled) + "\n";
			
			let isDirty = editor.document.isDirty;
			let msg_isDirty = "是否是修改状态: " + String(isDirty) + "\n";
			
			let msg = msg_fname + msg_line + msg_language + msg_isUntitled + msg_isDirty;
			
			// 输出到控制台
			let outputChannel = hx.window.createOutputChannel("info");
			outputChannel.show();
			outputChannel.appendLine(msg);
		}
		
		// 获取光标所在行内容
		if (property == "linetext") {
			let linePromise = editor.document.lineFromPosition(editor.selection.active);
			linePromise.then((line)=>{
				let line_msg = "当前光标所在行内容为: " + line.text.trim();
				hx.window.showInformationMessage(line_msg);
				console.log(line_msg);
			});
		}
		
		// 把当前选中的内容由小写转换大写
		if (property == "UpperCase") {
			let selection = editor.selection;
			console.log(selection);
			let word = editor.document.getText(selection);
			let toUpperCase = word.toUpperCase();
			editor.edit(editBuilder => {
				editBuilder.replace(selection,toUpperCase);
			});
		}
		
		// 获取当前文件缩进方式
		if (property == "tabSize") {
			let msg_tab_size = "当前tabSize为: " + String(editor.options.tabSize);
			hx.window.showInformationMessage(msg_tab_size);
			console.log(msg_tab_size);
		}
		
	});
}

module.exports = {
	textEditor
};