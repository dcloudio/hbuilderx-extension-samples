const hx = require('hbuilderx');

/**
 * @description hx.window.createWebViewDialog
 */
function WebviewDialog() {
    let webviewDialog = hx.window.createWebViewDialog({
        modal: true,
        title: "是否删除文件？",
        description: "删除后无法恢复，请谨慎操作。也可以到回收站看看。",
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
    webview.html = `
        <html>
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
        </script>
        </html>
    `;
    
    webview.onDidReceiveMessage((msg) => {
        console.log(msg)
        if (msg.command == 'cancel') {
            webviewDialog.close();
        }
    });
    
    let promi = webviewDialog.show();
    promi.then(function (data) {
        // 处理错误信息
    });
};

module.exports = WebviewDialog;
