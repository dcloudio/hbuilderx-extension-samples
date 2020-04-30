var hx = require("hbuilderx");

/**
 * @description 执行指定的文档编辑工作
 */
function applyEdit() {
	let editorPromise = hx.window.getActiveTextEditor();
	editorPromise.then((editor) => {
		let workspaceEdit = new hx.WorkspaceEdit();
		let edits = [];
		edits.push(new hx.TextEdit({
			start: 0,
			end: 0
		}, "foo\n"));

		workspaceEdit.set(editor.document.uri, edits);
		hx.workspace.applyEdit(workspaceEdit);
		hx.window.showInformationMessage("请注意: 文档第一行开头，插入了 foo");
	});
}

module.exports = {
	applyEdit
};
