var hx = require("hbuilderx");

/**
 * @description 执行内置命令
 */
function executeCommand() {
	hx.commands.executeCommand('workbench.action.closeAllEditors');
}

module.exports = {
	executeCommand
};