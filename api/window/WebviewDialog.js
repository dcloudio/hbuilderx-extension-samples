const hx = require('hbuilderx');

/**
 * @description hx.window.createWebViewDialog
 */
function WebviewDialog() {
    let webviewDialog = hx.window.createWebViewDialog({
        modal: false,
        title: "Email校验",
        description: "邮箱需符合“名称@域名”的规律",
        dialogButtons: [
            "确定", "取消"
        ],
        size: {
            width: 400,
            height: 300
        }
    }, {
        enableScripts: true
    });

    let webview = webviewDialog.webView;
    webview.html =`
        <body>
            <div>
                <input type="email" style="border: 1px solid #bedbbb; border-radius: 5px; line-height: 30px; width: 100%;" placeholder="Enter email"/>
            </div>
        </body>
        <script>
            function initReceive() {
                hbuilderx.onDidReceiveMessage((msg)=>{
                    if(msg.type == 'DialogButtonEvent'){
                        let button = msg.button;
                        if(button == '确定'){
                            //TODO 处理表单提交
                        }else if(button == '取消'){
                            //TODO 处理取消逻辑
                             hbuilderx.postMessage({
                                command: 'cancel'
                            });
                        }
                    }
                });
            }
            window.addEventListener("hbuilderxReady", initReceive);
    `;
    
    webview.postMessage({
        command: "test"
    });
    
    webview.onDidReceiveMessage((msg) => {
        console.log(msg)
        if (msg.command == 'cancel') {
            webviewDialog.close();
        }
    });
    
    webviewDialog.show();
};

module.exports = WebviewDialog;
