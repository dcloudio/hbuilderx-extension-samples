let hx = require('hbuilderx');

let myStatusBarItem;

/**
 * @description 创建状态栏元素
 * https://hx.dcloud.net.cn/ExtensionDocs/Api/windows/createStatusBarItem
 */
function createStatusBarItem() {
    if (myStatusBarItem == undefined) {
        myStatusBarItem = hx.window.createStatusBarItem(
            hx.StatusBarAlignment.Left,
            100,
        );
    };
    
    // 状态栏元素要显示的文本
    myStatusBarItem.text = '显示通知框';
    myStatusBarItem.text = '$(message)显示通知框';
    
    // 将鼠标悬停在状态栏元素上时的工具提示文本。
    myStatusBarItem.tooltip = "这是一个自定义的状态栏元素";
    
    // 要在单击时运行的命令或命令的标识符。命令必须是已注册的。
    myStatusBarItem.command = "api.show_info_message";
    
    myStatusBarItem.show();
};

module.exports = createStatusBarItem;
