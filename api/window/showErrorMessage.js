let hx = require('hbuilderx');

/**
 * @description 窗口右下角错误通知框
 */
function showErrorMessage() {
  let resultPromise = hx.window.showErrorMessage('这是一个 error 相关的通知框。<a href="http://www.baidu.com">错误</a>', ['我知道了',
    '取消'
  ]);
  resultPromise.then((result) => {
    if (result === '我知道了') {
      console.log('您点击的是: 我知道了');
    } else if (result === '取消') {
      console.log("您点击的是: 取消");
    }
  });
}

module.exports = {
  showErrorMessage
};
