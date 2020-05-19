var hx = require("hbuilderx");

/**
 * @description 文档打开时的事件
 */
function onDidOpenTextDocument() {
  let onDidOpenTextDocumentEventDispose = hx.workspace.onDidOpenTextDocument(function(event) {
    console.log('---------------------------');
    console.log(event);
  });
}

module.exports = {
  onDidOpenTextDocument
};
