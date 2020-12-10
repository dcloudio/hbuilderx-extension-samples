const hx = require('hbuilderx');

/**
 * @brief showMessageBox
 * @param messageType   消息类型 error | info | warning
 * @param messageTitle  标题
 * @param messageText   内容
 * @param buttons       按钮列表
 * @param defaultButton 默认按钮索引
 * @param escapeButton  默认Esc后执行的操作按钮索引
 *
 * escapeButton和defaultButton两个数值不能一样
 */
function showMessageBox() {
    let result = hx.window.showMessageBox({
        type: 'info',
        title: '测试对话框',
        text: '已选择的商品，支付失败，请选择接下来的操作？',
        buttons: ['继续支付', '关闭'],
        defaultButton: 1,
        escapeButton: -1
    });
    result.then((button) => {
        console.log(button);
    });
}

module.exports = showMessageBox;
