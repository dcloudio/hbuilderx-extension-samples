let hx = require('hbuilderx');

/**
 * @description 设置状态栏消息 （状态栏上不支持url跳转)
 * @param {String} level = ['info','error','warn']  - 消息级别
 */
function setStatusBarMessage(level = 'info', hideAfterTimeOut = 0) {
  let msg = "这是一条" + level + "级别的消息 <a href='http://www.baidu.com'>查看url</a>";
  if (hideAfterTimeOut !== 0) {
    msg = "这是一条能够自动隐藏的消息，" + String(hideAfterTimeOut) + "毫秒后消失。";
  }
  hx.window.setStatusBarMessage(msg, hideAfterTimeOut, level);
}

module.exports = {
  setStatusBarMessage
};
