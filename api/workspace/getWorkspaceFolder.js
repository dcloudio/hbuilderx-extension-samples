var hx = require("hbuilderx");

/**
 * @description 获取某个文件所在的项目
 */
function getWorkspaceFolder() {
  let activeEditor = hx.window.getActiveTextEditor();
  activeEditor.then(function(editor) {
    var fspath = editor.document.uri;
    var wsPromise = hx.workspace.getWorkspaceFolder(fspath);
    wsPromise.then(function(wsFolder) {
      console.log('----',wsFolder);
      console.log("文件所在项目：", wsFolder.name);
    });
  })
}

module.exports = {
  getWorkspaceFolder
};
