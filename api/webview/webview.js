const hb = require('hbuilderx');

/**
 * @description 显示webview
 */
function showWebView(webviewPanel) {
    let webview = webviewPanel.webview;
    webview.html =
        `
          <script>
              //    以下两种写法等同
              hbuilderx.onDidReceiveMessage((msg)=>{
              });
              window.addEventListener("message",(msg)=>{
              });
              hbuiderx.postMessage({
                  command: 'alert',
                  text: 'HelloWorld'
              });
          </script>
          <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-mac-test/54527ed0-c738-11ea-b680-7980c8a877b8.gif">
      `;
    webview.postMessage({
        command: "test"
    });
    webview.onDidReceiveMessage((msg) => {
        if (msg.command == 'alert') {
            hx.window.showInformationMessage(msg.text);
        }
    });
};


module.exports = {
    showWebView
}
