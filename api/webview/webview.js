const hx = require('hbuilderx');

/**
 * @description 显示webview
 */
function showWebView(webviewPanel) {
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
            <div style="max-width:200px; text-align: center;">
                <img src="https://download1.dcloud.net.cn/uploads/images/hbuilderx/hx_icon@1x.png">
                
            </div>
            <div style="text-align: center;">
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
