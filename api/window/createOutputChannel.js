let hx = require('hbuilderx');

/**
 * @description 创建输出控制台
 */
function createOutputChannel() {

	// 控制台名称
	let channel_name = "dev";

	// 创建控制台
	let outputChannel = hx.window.createOutputChannel(channel_name);

	// 显示控制台
	outputChannel.show();

	// 输出内容
	outputChannel.appendLine("====================================================");
	outputChannel.appendLine("欢迎体验HBuilderX插件：http://hbuilderx.dcloud.net.cn/");
	outputChannel.appendLine({"level": "success", "line": "这是一条成功的消息"});
	outputChannel.appendLine({"level": "error", "line": "这是一条失败的消息"});
}

module.exports = {
	createOutputChannel
};
