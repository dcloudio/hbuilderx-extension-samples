const hx = require('hbuilderx');

/**
 * @description copyFileWithPrompt
 */
function copyFileWithPrompt() {
    hx.workspace.copyFileWithPrompt({
        src: hx.Uri.file('F:/归档'),
        dest: hx.Uri.file('F:/alpha/归档'),
        filter: function(params) {
            return 0;
        },
        rootPromptTips: "当前位置文件已存在，将选择后续操作？",
        errorHandler: function(err) {
            return 0;
        }
    }).then((data) => {
        console.log("--->", data);
    })
};

module.exports = copyFileWithPrompt;
