var hx = require("hbuilderx");

/**
 * @description 根据指定的section获取从【设置-源码视图】 取值
 */
function getConfiguration() {
	// 以node内存值为例
	let config = hx.workspace.getConfiguration();
	let node_memory = config.get('node.run.memoryParam');
	let msg = "当前uniapp node运行内存最大值为: " + String(node_memory);
	hx.window.showInformationMessage(msg);
	
	// 以eslint-js为例
	let esconfig = hx.workspace.getConfiguration("eslint-js");
	let is_autoFixOnSave = esconfig.get('autoFixOnSave');
	console.log("=============== eslint is_autoFixOnSave: ",is_autoFixOnSave);
}

/**
 * @description 更新配置, 把node内存默认值由2048为1024
 */
function updateConfiguration() {
	let config = hx.workspace.getConfiguration();
	var before_memory = config.get('node.run.memoryParam');
	console.log("==============update before:",before_memory);
	
	config.update("node.run.memoryParam", "1024").then(() => {
		// 获取更新之后的值
		let after_memory = config.get('node.run.memoryParam');
		console.log("==============update after",typeof(after_memory),after_memory);
		// 输出消息到控制台、弹框
		let msg = "node内存值从" + String(before_memory) + "更新为: " + String(after_memory);
		hx.window.showInformationMessage(msg);
		console.log(msg);
	})
}

/**
 * @description 在全局配置中，插入新值
 */
function addConfiguration() {
	let config = hx.workspace.getConfiguration();
	config.update("datetime", "2020-04-28 00:00:00").then(() => {
		hx.window.showInformationMessage("插入新值成功");
	})
}

module.exports = {
	getConfiguration,
	updateConfiguration,
	addConfiguration
};
