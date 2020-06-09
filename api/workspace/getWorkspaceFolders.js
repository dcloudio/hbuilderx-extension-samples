var hx = require("hbuilderx");

/**
 * @description 获取项目管理器下所有的项目对象
 */
function getWorkspaceFolders() {
  var wsPromise = hx.workspace.getWorkspaceFolders();
  wsPromise.then(function(wsFolders) {
    console.log(wsFolders);
    console.log("项目管理器包含的项目数量：", wsFolders.length);
  });
}

module.exports = {
  getWorkspaceFolders
};
