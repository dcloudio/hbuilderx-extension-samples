const hx = require('hbuilderx');

/**
 * @description 把文件或目录，拷贝到指定目录下
 * @param {String} src 绝对路径，目录或文件
 * @param {String} dest 绝对路径，必须是目录
 */
function copyFileWithPrompt(src, dest) {
    hx.workspace.copyFileWithPrompt({
        src: hx.Uri.file(src),
        dest: hx.Uri.file(dest),
        filter: function(params) {
            return 0;
        },
        rootPromptTips: "当前位置文件已存在，将选择后续操作？",
        errorHandler: function(err) {
            return 0;
        }
    }).then((data) => {
        // 0 操作成功
        // 101  无效的路径/没有找到该文件对应的文件系统
        // 102  没有找到该文件
        // 103  打开文件失败
        // 104  读取文件内容失败
        // 105  写入文件内容失败
        // 106  删除文件失败
        // 107  创建文件夹失败
        // 108  获取文件列表失败
        // 109  创建临时文件夹失败
        // 201  解析Json数据失败，可能是无效的Json数据
        console.log("--->", data);
    })
};

module.exports = copyFileWithPrompt;
