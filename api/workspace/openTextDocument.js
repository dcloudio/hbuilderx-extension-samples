var hx = require("hbuilderx");
var fs = require("fs");
var path = require("path");

/**
 * @description 通过指定的uri打开一个文档
 */
function openTextDocument() {
	// 文档地址
	var current_dir = __dirname;
	var random_filename = String(Date.parse(new Date())) + ".log";
	let uri = path.join(__dirname, random_filename);

	// 随机创建一个文件并打开
	fs.writeFile(uri, "这是一个刚刚创建的文件，创建后，使用hx.workspace.openTextDocument()打开了它",err => {
		if (err) {
			hx.window.showErrorMessage("创建测试文件失败！");
		} else {
			var documentPromise = hx.workspace.openTextDocument(uri);
			documentPromise.then(function(document) {
				console.log(document);
				console.log("当前打开的文档是: ", document.fileName);
			});
		}
	});
}

module.exports = {
	openTextDocument
};
