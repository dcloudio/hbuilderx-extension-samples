const hx = require('hbuilderx');

/**
 * @description 显示webview
 */
function showWebView(webviewPanel) {
    hx.window.showErrorMessage('互相学习')
    let webview = webviewPanel.webView;
    
    let background = '';
    
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
                <button onclick="send();">点我传送</button>
            </div>
            <script>
                function send() {
                    hbuilderx.postMessage({
                        command: 'alert',
                        text: 'HelloWorld'
                    });
                }
                
                window.onload=function() {
                    //    以下两种写法等同
                    hbuilderx.onDidReceiveMessage((msg) => {
                        console.log(msg)
                    });
                }
            </script>
        </body>
        
      `;
    webview.onDidReceiveMessage((msg) => {
        if (msg.command == 'alert') {
            hx.window.showInformationMessage(msg.text);
            webview.postMessage({
                command: "test"
            });
        }
    });
};


module.exports = {
    showWebView
}
