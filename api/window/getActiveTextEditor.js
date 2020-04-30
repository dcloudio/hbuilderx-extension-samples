let hx = require('hbuilderx');

/**
 * @description 获取当前激活的编辑器
 */
function getActiveTextEditor(value) {
	let activeEditor = hx.window.getActiveTextEditor();
	activeEditor.then(function(editor) {
		switch (value) {
			case "filename":
				let fname = editor.document.fileName;
				hx.window.showInformationMessage("当前激活的编辑器是：" + String(fname));
				break;
			case "nature":
				let nature = editor.document.workspaceFolder.nature;
				hx.window.showInformationMessage("当前项目类型是：" + nature);
				break;
			case "project_name":
				let pro_name = editor.document.workspaceFolder.name;
				hx.window.showInformationMessage("当前项目名称是：" + String(pro_name));
				break;
		}

	});
}

module.exports = {
	getActiveTextEditor
};
