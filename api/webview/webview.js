const hx = require('hbuilderx');

/**
 * @description 显示webview
 */
function showWebView(webviewPanel) {
    let webview = webviewPanel.webView;
    
    var background = '';
    
    let config = hx.workspace.getConfiguration();
    let colorScheme = config.get('editor.colorScheme');
    if (colorScheme == 'Monokai') {
        background = 'rgb(39,40,34)'
    } else if (colorScheme == 'Atom One Dark') {
        background = 'rgb(40,44,53)'
    } else {
        background = 'rgb(255,250,232)'
    };
    
    webview.html =
        `
        <body style="background-color:${background};border:1px solid ${background};">
            <div style="max-width:200px;">
                <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-mac-test/09318270-c742-11ea-b680-7980c8a877b8.gif" style="position: absolute;bottom: 0;left: 0;right: 0;width: 100%;margin: auto;">
            </div>
            <script>
                //    以下两种写法等同
                hbuilderx.onDidReceiveMessage((msg) => {});
                window.addEventListener("message", (msg) => {});
                hbuiderx.postMessage({
                    command: 'alert',
                    text: 'HelloWorld'
                });
            </script>
        </body>
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
