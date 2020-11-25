const hx = require('hbuilderx');

/**
 * @brief showMessageBox
 * @param messageType   消息类型 error | info | warning
 * @param messageTitle  标题
 * @param messageText   内容
 * @param buttons       按钮列表
 * @param defaultButton 默认按钮索引
 * @param escapeButton  默认Esc后执行的操作按钮索引
 */
function showMessageBox() {
    let result = hx.window.showMessageBox({
        type: 'info',
        title: '测试对话框',
        text: '这里是测试对话框内容.......',
        buttons: ['确定', '取消']
    });
    result.then((button) => {
        if (button == '确定') {} else if (button == '取消') {}
    });
}

module.exports = showMessageBox;
