var hx = require("hbuilderx");

/**
 * @description 全局配置改变事件，比如"editor.fontSize"改变，或者通过插件扩展的配置项改变
 */
function onDidChangeConfiguration() {
  let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event) {
    if (event.affectsConfiguration("node.run.memoryParam")) {
      console.log("修改了node内存");
    }
  });
}

module.exports = {
  onDidChangeConfiguration
};
