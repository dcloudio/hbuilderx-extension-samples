const hx = require("hbuilderx");

let CustomDocument = hx.CustomEditor.CustomDocument;
let CustomEditorProvider = hx.CustomEditor.CustomEditorProvider;
let CustomDocumentEditEvent = hx.CustomEditor.CustomDocumentEditEvent;


class CatCustomDocument extends CustomDocument {
    constructor(uri) {
        super(uri)
    }
    dispose() {
        super.dispose();
    }
}

function html(webViewPanel) {
    webViewPanel.webView.html = `
        <html>
    <style>
        #close{
            margin-top: 2rem;
            width:200;
            height:40;
            background:red;
        }
        #post{
            margin-top: 2rem;
            width:200;
            height:40;
            background:green;
        }
    </style>
    <body>
        <div id="post">设置编辑器为编辑状态</div>
        <div id="close">关闭当前自定义编辑器</div>
    </body>
    <script>
        var ele = document.getElementById('close');
        ele.addEventListener('click', function(){
            hbuilderx.postMessage({
                command: 'close'
            });
        });
        var ele2 = document.getElementById('post');
        ele2.addEventListener('click', function(){
            hbuilderx.postMessage({
                type : 'edit'
            });
        });
    </script>
    </html>
    `;
}

class CatCustomEditorProvider extends CustomEditorProvider {
    constructor(context) {
        super()
    }
    openCustomDocument(uri) {
        return Promise.resolve(new CatCustomDocument(uri));
    }
    resolveCustomEditor(document, webViewPanel) {
        
        // 渲染html
        html(webViewPanel);
          
        webViewPanel.onDidDispose(function() {
            console.log("custom editor disposed");
        });
        
        let provider = this;
        webViewPanel.webView.onDidReceiveMessage(function(msg) {
            if (!msg)
                return;
            if (msg.command == 'close') {
                webViewPanel.dispose();
            } else if (msg.type == 'edit') {
                provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
            }
        });
    }
    
    saveCustomDocument(document) {
        return true;
    }
    saveCustomDocumentAs(document, destination) {
        return true;
    }
}


module.exports = CatCustomEditorProvider;