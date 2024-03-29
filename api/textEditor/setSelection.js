let hx = require('hbuilderx');

/**
 * @description setSelection
 */
function setSelection() {
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor) {
        editor.setSelection(0, 50).then(() => {
            // editor.addSelection(16, 18);
        });
    }).catch( error => {
        console.log('--------', error);
    });
}

module.exports = {
    setSelection
};
