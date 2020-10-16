const hx = require("hbuilderx");
const path = require("path");

// api
var commands = require("./api/commands/executeCommand.js");
var setStatusBarMessage = require('./api/window/setStatusBarMessage.js');
var clearStatusBarMessage = require('./api/window/clearStatusBarMessage.js');
var showErrorMessage = require('./api/window/showErrorMessage.js');
var showInformationMessage = require('./api/window/showInformationMessage.js');
var showWarningMessage = require('./api/window/showWarningMessage.js');
var showQuickPick = require('./api/window/showQuickPick.js');
var getActiveTextEditor = require('./api/window/getActiveTextEditor.js');
var createOutputChannel = require('./api/window/createOutputChannel.js');
var showInputBox = require('./api/window/showInputBox.js');
var openTextDocument = require('./api/workspace/openTextDocument.js');
var onWillSaveTextDocument = require('./api/workspace/onWillSaveTextDocument.js');
var onDidChangeTextDocument = require('./api/workspace/onDidChangeTextDocument.js');
var onDidSaveTextDocument = require('./api/workspace/onDidSaveTextDocument.js');
var onDidOpenTextDocument = require('./api/workspace/onDidOpenTextDocument.js');
var onDidChangeWorkspaceFolders = require('./api/workspace/onDidChangeWorkspaceFolders.js');
var onDidChangeConfiguration = require('./api/workspace/onDidChangeConfiguration.js')
var applyEdit = require('./api/workspace/applyEdit.js');
var getConfiguration = require('./api/workspace/getConfiguration.js');
var getWorkspaceFolders = require('./api/workspace/getWorkspaceFolders.js');
var getWorkspaceFolder = require('./api/workspace/getWorkspaceFolder.js');
var textEditor = require('./api/textEditor/textEditor.js');
var lineFromPosition = require('./api/textEditor/lineFromPosition.js');
var lineAt = require('./api/textEditor/lineAt.js');
var getText = require('./api/textEditor/getText.js');
var uri = require('./api/textEditor/uri.js');
var setSelection = require('./api/textEditor/setSelection.js');
var DiagnosticCollection = require('./api/languages/DiagnosticCollection.js');
var help = require('./api/help/help.js');
var openExternal = require('./api/env/openExternal.js');
var clipboard = require('./api/env/clipboard.js');

var DemoTreeDataProvider = require('./api/treeview/treeview.js').DemoTreeDataProvider;
var showWebView = require('./api/webview/webview.js');
var test = require('./test/test.js');

var CatCustomEditorProvider = require('./api/customEditor/custom.js');

//该方法将在插件激活的时候调用
function activate(context) {
    // run test
    let runtest = hx.commands.registerCommand('extension.runtest', () => {
        test.runtest()
    });
    // commands
    let api_commands = hx.commands.registerCommand('extension.api_commands', () => {
        commands.executeCommand();
    });
    // windows Api: 设置状态栏消息 info
    let api_status_bar_info_message = hx.commands.registerCommand('extension.api_status_bar_info_message', () => {
        setStatusBarMessage.setStatusBarMessage("info");
    });
    // windows Api: 设置状态栏消息 error
    let api_status_bar_error_message = hx.commands.registerCommand('extension.api_status_bar_error_message', () => {
        setStatusBarMessage.setStatusBarMessage("error");
    });
    // windows Api: 设置状态栏消息 warn
    let api_status_bar_warn_message = hx.commands.registerCommand('extension.api_status_bar_warn_message', () => {
        setStatusBarMessage.setStatusBarMessage("warn");
    });
    // windows Api: 设置状态栏消息 warn
    let api_status_bar_timeout_message = hx.commands.registerCommand('extension.api_status_bar_timeout_message', () => {
        setStatusBarMessage.setStatusBarMessage("info", 2000);
    });
    // windows Api: 清空设置状态栏消息
    let api_clear_status_bar_message = hx.commands.registerCommand('extension.api_clear_status_bar_message', () => {
        clearStatusBarMessage.clearStatusBarMessage();
    });
    // windows Api: 右下角错误通知栏
    let api_show_error_message = hx.commands.registerCommand('extension.api_show_error_message', () => {
        showErrorMessage.showErrorMessage();
    });
    // windows Api: 右下角info通知栏
    let api_show_info_message = hx.commands.registerCommand('extension.api_show_info_message', () => {
        showInformationMessage.showInformationMessage();
    });
    // windows Api: 右下角warning通知栏
    let api_show_warning_message = hx.commands.registerCommand('extension.api_show_warning_message', () => {
        showWarningMessage.showWarningMessage();
    });
    // windows Api: 在窗口中间弹出一个可搜索的建议选择列表
    let api_window_show_quick_pick = hx.commands.registerCommand('extension.api_window_show_quick_pick', () => {
        showQuickPick.showQuickPick();
    });
    // windows Api: show_input_box
    let api_window_show_input_box = hx.commands.registerCommand('extension.api_window_show_input_box', () => {
        showInputBox.showInputBox();
    });

    // windows Api: 获取当前激活的编辑器名称
    let api_get_active_text_editor = hx.commands.registerCommand('extension.api_get_active_text_editor', () => {
        getActiveTextEditor.getActiveTextEditor("filename");
    });
    // windows Api: 获取项目类型
    let api_get_active_text_editor_for_nature = hx.commands.registerCommand(
        'extension.api_get_active_text_editor_for_nature', () => {
            getActiveTextEditor.getActiveTextEditor("nature");
        });
    // windows Api: 获取项目名称
    let api_get_active_text_editor_for_project_name = hx.commands.registerCommand(
        'extension.api_get_active_text_editor_for_project_name', () => {
            getActiveTextEditor.getActiveTextEditor("project_name");
        });
    // windows Api: 创建输出控制台
    let api_window_create_output_channel = hx.commands.registerCommand('extension.api_window_create_output_channel', () => {
        createOutputChannel.createOutputChannel();
    });

    // workspace Api: 通过uri打开文档
    let api_open_text_document = hx.commands.registerCommand('extension.api_open_text_document', () => {
        openTextDocument.openTextDocument();
    });
    // workspace Api: 文档即将要保存的事件
    let api_on_will_save_text_document = hx.commands.registerCommand('extension.api_on_will_save_text_document', () => {
        onWillSaveTextDocument.onWillSaveTextDocument();
    });
    // workspace Api: 文档被修改时的事件
    let api_on_did_change_text_document = hx.commands.registerCommand('extension.api_on_did_change_text_document', () => {
        onDidChangeTextDocument.onDidChangeTextDocument();
    });
    let api_on_did_open_text_document = hx.commands.registerCommand('extension.api_on_did_open_text_document', () => {
        onDidOpenTextDocument.onDidOpenTextDocument()
    })
    // workspace Api: 文档被保存时的事件
    let api_on_did_save_text_document = hx.commands.registerCommand('extension.api_on_did_save_text_document', () => {
        onDidSaveTextDocument.onDidSaveTextDocument();
    });
    // workspace Api:
    let api_on_did_change_forkspace_folders = hx.commands.registerCommand(
        'extension.api_on_did_change_forkspace_folders',
        () => {
            onDidChangeWorkspaceFolders.onDidChangeWorkspaceFolders()
        });
    // workspace Api: applyEdit
    let api_workspace_apply_edit = hx.commands.registerCommand('extension.api_workspace_apply_edit', () => {
        applyEdit.applyEdit();
    });
    // workspace Api: getWorkspaceFolders
    let api_get_workspace_folders = hx.commands.registerCommand('extension.api_get_workspace_folders', () => {
        getWorkspaceFolders.getWorkspaceFolders()
    })
    // workspace Api: getWorkspaceFolder
    let api_get_workspace_folder = hx.commands.registerCommand('extension.api_get_workspace_folder', () => {
        getWorkspaceFolder.getWorkspaceFolder()
    })
    // workspace Api: onDidChangeConfiguration
    let api_on_did_chanage_configuration = hx.commands.registerCommand('extension.api_on_did_chanage_configuration', () => {
        onDidChangeConfiguration.onDidChangeConfiguration()
    });
    // workspace Api: getConfiguration 根据指定的section获取对应配置
    let api_workspace_get_configuration = hx.commands.registerCommand('extension.api_workspace_get_configuration', () => {
        getConfiguration.getConfiguration();
    });
    // workspace Api: getConfiguration  update
    let api_workspace_update_configuration = hx.commands.registerCommand('extension.api_workspace_update_configuration',
        () => {
            getConfiguration.updateConfiguration();
        });
    // workspace Api: getConfiguration add
    let api_workspace_add_configuration = hx.commands.registerCommand('extension.api_workspace_add_configuration', () => {
        getConfiguration.addConfiguration();
    });

    // windows Api: 打印uri所有信息
    let api_uri = hx.commands.registerCommand('extension.api_uri', () => {
        uri.uri();
    });
    // TextEditor Api: TextEditor
    let api_text_editor = hx.commands.registerCommand('extension.api_text_editor', () => {
        textEditor.textEditor("document");
    });
    // TextEditor Api: TextEditor for line text 获取光标所在行内容
    let api_text_editor_linetext = hx.commands.registerCommand('extension.api_text_editor_linetext', () => {
        textEditor.textEditor("linetext");
    });
    // TextEditor Api: 把当前选中的内容由小写转换大写
    let api_text_editor_line_to_upper_case = hx.commands.registerCommand('extension.api_text_editor_line_to_upper_case',
        () => {
            textEditor.textEditor("UpperCase");
        });
    // TextEditor Api:获取当前文件tabSize
    let api_text_editor_indent = hx.commands.registerCommand('extension.api_text_editor_indent', () => {
        textEditor.textEditor("tabSize");
    });
    // TextEditor Api: lineFromPosition 根据光标位置获取光标所在行
    let api_text_lineFromPosition = hx.commands.registerCommand('extension.api_text_lineFromPosition', () => {
        lineFromPosition.lineFromPosition();
    });
    // TextEditor Api: lineFromPosition 根据光标位置获取光标所在行
    let api_text_lineAt = hx.commands.registerCommand('extension.api_text_lineAt', () => {
        lineAt.lineAt();
    });
    // TextEditor Api: getText 获取指定区域内的文本
    let api_text_getText = hx.commands.registerCommand('extension.api_text_getText', () => {
        getText.getText();
    });
    // setSelection
    let api_set_selection = hx.commands.registerCommand('extension.api_set_selection', () => {
        setSelection.setSelection()
    })

    // Languages Api: DiagnosticCollection 创建问题集合
    let api_languages_create_diagnostics_collection = hx.commands.registerCommand(
        'extension.api_languages_create_diagnostics_collection', () => {
            DiagnosticCollection.createDiagnosticCollection();
        });

    // help
    let open_help = hx.commands.registerCommand("extension.open_help", () => {
        help.openHelp()
    });
    // openExternals
    let api_openExternal_url = hx.commands.registerCommand('extension.api_openExternal_url', () => {
        openExternal.openExternal("https://www.baidu.com")
    });
    // openExternals
    let api_openExternal_mail = hx.commands.registerCommand('extension.api_openExternal_mail', () => {
        openExternal.openExternal("mailto:ide@dcloud.io")
    })

    // clipboard
    let api_clipboard_write = hx.commands.registerCommand('extension.api_clipboard_write', () => {
        clipboard.clipboardWrite()
    });
    // clipboard
    let api_clipboard_read = hx.commands.registerCommand('extension.api_clipboard_read', () => {
        clipboard.clipboardRead()
    });

    //Api: treeview
    hx.window.createTreeView("extension.treedemo", {
        showCollapseAll: true,
        treeDataProvider: new DemoTreeDataProvider()
    });

    // Api: webview
    let webviewPanel = hx.window.createWebView("extension.WebView", {
        enableScritps: true
    });
    showWebView.showWebView(webviewPanel);

    let webviewPanel2 = hx.window.createWebView("extension.WebView2", {
        enableScritps: true
    });
    showWebView.showWebView(webviewPanel2);
    
    // Api: 自定义编辑器 customEditor
    let provider = new CatCustomEditorProvider({
        supportsMultipleEditorsPerDocument: true
    });
    hx.window.registerCustomEditorProvider("catEdit.catScratch", provider);
    
    let CustomEditorTest = hx.commands.registerCommand('extension.CustomEditor', (param) => {
        let f = path.join(__dirname, "api", "customEditor", "test.cscratch");
        hx.workspace.openTextDocument(f);
    });
};

//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
    activate,
    deactivate
};
