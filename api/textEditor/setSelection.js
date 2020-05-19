let hx = require('hbuilderx');

/**
 * @description setSelection
 */
function setSelection() {
  let activeEditor = hx.window.getActiveTextEditor();
  activeEditor.then(function(editor) {
    editor.setSelection(10, 12).then(() => {
      editor.addSelection(16, 18);
    });
  });
}

module.exports = {
  setSelection
};
