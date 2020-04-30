let hx = require('hbuilderx');

/**
 * @description 打开浏览器
 * @param {String} url
 */
function openBrowser(url) {
  var exec = require('child_process').exec;
  switch (process.platform) {
    case "darwin":
      exec('open ' + url);
      break;
    case "win32":
      exec('start ' + url);
      break;
    default:
      exec('xdg-open', [url]);
  }
}

/**
 * @description 在窗口中间弹出一个可搜索的建议选择列表
 */
function showQuickPick() {
	let items = [{
			label: "HBuilderX入门教程",
			url: "https://ask.dcloud.net.cn/article/35357"
		}, {
			label: "HBuilderX技巧：利用外部命令，可以做哪些事？",
			url: "https://ask.dcloud.net.cn/article/35460"
		},
		{
			label: "HBuilderX editorconfig使用说明",
			url: "https://ask.dcloud.net.cn/article/36070"
		},
		{
			label:"HBuilderX真机运行常见问题",
			url: "https://ask.dcloud.net.cn/article/97"
		}
	];
	
	const PickResult = hx.window.showQuickPick(items, {
		placeHolder: "请选择您要查看的帮助文档"
	});

	PickResult.then(function(result) {
		if (!result) {
			return;
		}
		let text = result.label;
		console.log("您选择的内容是：", text);
		
		// 使用浏览器打开URL
		openBrowser(result.url);
	});
}

module.exports = {
	showQuickPick
};
