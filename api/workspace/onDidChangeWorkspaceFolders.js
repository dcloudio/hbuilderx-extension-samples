var hx = require("hbuilderx");

/**
 * @description 项目管理器内的项目新增或者移除时产生的事件
 */
function onDidChangeWorkspaceFolders() {
  let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event) {
    if (event.added) {
      event.added.forEach(item => console.log("新增了项目:", item.name));
    }
    if (event.removed) {
      event.removed.forEach(item => console.log("移除了项目:", item.name));
    }
  });
}

module.exports = {
  onDidChangeWorkspaceFolders
};
