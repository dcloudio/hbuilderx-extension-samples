const hx = require("hbuilderx");
const path = require("path");

// api
const commands = require("./api/commands/executeCommand.js");

const setStatusBarMessage = require('./api/window/setStatusBarMessage.js');
const clearStatusBarMessage = require('./api/window/clearStatusBarMessage.js');
const showErrorMessage = require('./api/window/showErrorMessage.js');
const showInformationMessage = require('./api/window/showInformationMessage.js');
const showWarningMessage = require('./api/window/showWarningMessage.js');
const showMessageBox = require('./api/window/showMessageBox.js');
const showQuickPick = require('./api/window/showQuickPick.js');
const getActiveTextEditor = require('./api/window/getActiveTextEditor.js');
const createOutputChannel = require('./api/window/createOutputChannel.js');
const showInputBox = require('./api/window/showInputBox.js');
const WebviewDialog = require('./api/window/WebviewDialog.js');
const showFormDialog = require('./api/window/showFormDialog.js');

const openTextDocument = require('./api/workspace/openTextDocument.js');
const onWillSaveTextDocument = require('./api/workspace/onWillSaveTextDocument.js');
const onDidChangeTextDocument = require('./api/workspace/onDidChangeTextDocument.js');
const onDidSaveTextDocument = require('./api/workspace/onDidSaveTextDocument.js');
const onDidOpenTextDocument = require('./api/workspace/onDidOpenTextDocument.js');
const onDidChangeWorkspaceFolders = require('./api/workspace/onDidChangeWorkspaceFolders.js');
const onDidChangeConfiguration = require('./api/workspace/onDidChangeConfiguration.js')
const applyEdit = require('./api/workspace/applyEdit.js');
const getConfiguration = require('./api/workspace/getConfiguration.js');
const getWorkspaceFolders = require('./api/workspace/getWorkspaceFolders.js');
const getWorkspaceFolder = require('./api/workspace/getWorkspaceFolder.js');
const copyFileWithPrompt = require('./api/workspace/copyFileWithPrompt.js');

const textEditor = require('./api/textEditor/textEditor.js');
const lineFromPosition = require('./api/textEditor/lineFromPosition.js');
const lineAt = require('./api/textEditor/lineAt.js');
const getText = require('./api/textEditor/getText.js');
const uri = require('./api/textEditor/uri.js');
const setSelection = require('./api/textEditor/setSelection.js');

const DiagnosticCollection = require('./api/languages/DiagnosticCollection.js');

const help = require('./api/help/help.js');
const openExternal = require('./api/env/openExternal.js');
const clipboard = require('./api/env/clipboard.js');
const authorize = require('./api/authorize/index.js');
const handleJson = require('./api/util/json.js');

const showCommandPanel = require('./commandPanel.js');

var DemoTreeDataProvider = require('./api/treeview/treeview.js').DemoTreeDataProvider;
var showWebView = require('./api/webview/webview.js');
var test = require('./test/test.js');

var CatCustomEditorProvider = require('./api/customEditor/custom.js');

//该方法将在插件激活的时候调用
function activate(context) {
    hx.app.registService("api.pack_example", (context) => {
        console.log("path:" + context.pkgLocation);
    });

    // command
    let CommandPanel = hx.commands.registerCommand('api.CommandPanel', () => {
        showCommandPanel()
    });
    context.subscriptions.push(CommandPanel);

    // run test
    let runtest = hx.commands.registerCommand('api.runtest', () => {
        test.runtest();
    });
    context.subscriptions.push(runtest);

    // commands
    let api_commands = hx.commands.registerCommand('api.commands', () => {
        commands.executeCommand();
    });
    context.subscriptions.push(api_commands);

    // windows Api: 设置状态栏消息 info
    let api_status_bar_info_message = hx.commands.registerCommand('api.status_bar_info_message', () => {
        setStatusBarMessage.setStatusBarMessage("info");
    });
    context.subscriptions.push(api_status_bar_info_message);

    // windows Api: 设置状态栏消息 error
    let api_status_bar_error_message = hx.commands.registerCommand('api.status_bar_error_message', () => {
        setStatusBarMessage.setStatusBarMessage("error");
    });
    context.subscriptions.push(api_status_bar_error_message);

    // windows Api: 设置状态栏消息 warn
    let api_status_bar_warn_message = hx.commands.registerCommand('api.status_bar_warn_message', () => {
        setStatusBarMessage.setStatusBarMessage("warn");
    });
    context.subscriptions.push(api_status_bar_warn_message);

    // windows Api: 设置状态栏消息 warn
    let api_status_bar_timeout_message = hx.commands.registerCommand('api.status_bar_timeout_message', () => {
        setStatusBarMessage.setStatusBarMessage("info", 2000);
    });
    context.subscriptions.push(api_status_bar_timeout_message);

    // windows Api: 清空设置状态栏消息
    let api_clear_status_bar_message = hx.commands.registerCommand('api.clear_status_bar_message', () => {
        clearStatusBarMessage.clearStatusBarMessage();
    });
    context.subscriptions.push(api_clear_status_bar_message);

    // windows Api: 右下角错误通知栏
    let api_show_error_message = hx.commands.registerCommand('api.show_error_message', () => {
        showErrorMessage.showErrorMessage();
    });
    context.subscriptions.push(api_show_error_message);

    // windows Api: 右下角info通知栏
    let api_show_info_message = hx.commands.registerCommand('api.show_info_message', () => {
        showInformationMessage.showInformationMessage();
    });
    context.subscriptions.push(api_show_info_message);

    // windows Api: 右下角warning通知栏
    let api_show_warning_message = hx.commands.registerCommand('api.show_warning_message', () => {
        showWarningMessage.showWarningMessage();
    });
    context.subscriptions.push(api_show_warning_message);

    // windows Api: show Box
    let api_window_show_message_box = hx.commands.registerCommand('api.window_show_message_box', () => {
        showMessageBox();
    });
    context.subscriptions.push(api_window_show_message_box);

    // windows Api: 在窗口中间弹出一个可搜索的建议选择列表
    let api_window_show_quick_pick = hx.commands.registerCommand('api.window_show_quick_pick', () => {
        showQuickPick.showQuickPick();
    });
    context.subscriptions.push(api_window_show_quick_pick);

    // windows Api: show_input_box
    let api_window_show_input_box = hx.commands.registerCommand('api.window_show_input_box', () => {
        showInputBox.showInputBox();
    });
    context.subscriptions.push(api_window_show_input_box);

    // windows Api: createWebViewDialog
    let api_window_WebviewDialog = hx.commands.registerCommand('api.window_WebviewDialog', ()=> {
        WebviewDialog();
    });
    context.subscriptions.push(api_window_WebviewDialog);

    // windows Api: window_showFormDialog
    let api_window_showFormDialog = hx.commands.registerCommand('api.window_showFormDialog', ()=> {
        showFormDialog();
    });
    context.subscriptions.push(api_window_showFormDialog);

    // windows Api: 获取当前激活的编辑器名称
    let api_get_active_text_editor = hx.commands.registerCommand('api.get_active_text_editor', () => {
        getActiveTextEditor.getActiveTextEditor("filename");
    });
    context.subscriptions.push(api_get_active_text_editor);

    // windows Api: 获取项目类型
    let api_get_active_text_editor_for_nature = hx.commands.registerCommand('api.get_active_text_editor_for_nature', () => {
        getActiveTextEditor.getActiveTextEditor("nature");
    });
    context.subscriptions.push(api_get_active_text_editor_for_nature);

    // windows Api: 获取项目名称
    let api_get_active_text_editor_for_project_name = hx.commands.registerCommand('api.get_active_text_editor_for_project_name', () => {
        getActiveTextEditor.getActiveTextEditor("project_name");
    });
    context.subscriptions.push(api_get_active_text_editor_for_project_name);

    // windows Api: 创建输出控制台
    let api_window_create_output_channel = hx.commands.registerCommand('api.window_create_output_channel', () => {
        createOutputChannel.createOutputChannel();
    });
    context.subscriptions.push(api_window_create_output_channel);

    // workspace Api: 通过uri打开文档
    let api_open_text_document = hx.commands.registerCommand('api.open_text_document', () => {
        openTextDocument.openTextDocument();
    });
    context.subscriptions.push(api_open_text_document);

    // workspace Api: 文档即将要保存的事件
    let api_on_will_save_text_document = hx.commands.registerCommand('api.on_will_save_text_document', () => {
        onWillSaveTextDocument.onWillSaveTextDocument();
    });
    context.subscriptions.push(api_on_will_save_text_document);

    // workspace Api: 文档被修改时的事件
    let api_on_did_change_text_document = hx.commands.registerCommand('api.on_did_change_text_document', () => {
        onDidChangeTextDocument.onDidChangeTextDocument();
    });
    context.subscriptions.push(api_on_did_change_text_document);

    let api_on_did_open_text_document = hx.commands.registerCommand('api.on_did_open_text_document', () => {
        onDidOpenTextDocument.onDidOpenTextDocument()
    });
    context.subscriptions.push(api_on_did_open_text_document);

    // workspace Api: 文档被保存时的事件
    let api_on_did_save_text_document = hx.commands.registerCommand('api.on_did_save_text_document', () => {
        onDidSaveTextDocument.onDidSaveTextDocument();
    });
    context.subscriptions.push(api_on_did_save_text_document);

    // workspace Api:
    let api_on_did_change_forkspace_folders = hx.commands.registerCommand('api.on_did_change_forkspace_folders', () => {
        onDidChangeWorkspaceFolders.onDidChangeWorkspaceFolders()
    });
    context.subscriptions.push(api_on_did_change_forkspace_folders);

    // workspace Api: applyEdit
    let api_workspace_apply_edit = hx.commands.registerCommand('api.workspace_apply_edit', () => {
        applyEdit.applyEdit();
    });
    context.subscriptions.push(api_workspace_apply_edit);

    // workspace Api: getWorkspaceFolders
    let api_get_workspace_folders = hx.commands.registerCommand('api.get_workspace_folders', () => {
        getWorkspaceFolders.getWorkspaceFolders();
    });
    context.subscriptions.push(api_get_workspace_folders);

    // workspace Api: getWorkspaceFolder
    let api_get_workspace_folder = hx.commands.registerCommand('api.get_workspace_folder', () => {
        getWorkspaceFolder.getWorkspaceFolder();
    });
    context.subscriptions.push(api_get_workspace_folder);

    // workspace Api: onDidChangeConfiguration
    let api_on_did_chanage_configuration = hx.commands.registerCommand('api.on_did_chanage_configuration', () => {
        onDidChangeConfiguration.onDidChangeConfiguration()
    });
    context.subscriptions.push(api_on_did_chanage_configuration);

    // workspace Api: getConfiguration 根据指定的section获取对应配置
    let api_workspace_get_configuration = hx.commands.registerCommand('api.workspace_get_configuration', () => {
        getConfiguration.getConfiguration();
    });
    context.subscriptions.push(api_workspace_get_configuration);

    // workspace Api: getConfiguration  update
    let api_workspace_update_configuration = hx.commands.registerCommand('api.workspace_update_configuration',() => {
        getConfiguration.updateConfiguration();
    });
    context.subscriptions.push(api_workspace_update_configuration);

    // workspace Api: getConfiguration add
    let api_workspace_add_configuration = hx.commands.registerCommand('api.workspace_add_configuration', () => {
        getConfiguration.addConfiguration();
    });
    context.subscriptions.push(api_workspace_add_configuration);

    // workspace Api: copyFileWithPrompt
    let api_workspace_copy_file_with_prompt = hx.commands.registerCommand('api.workspace_copy_file_with_prompt', () => {
        copyFileWithPrompt();
    });
    context.subscriptions.push(api_workspace_copy_file_with_prompt);

    // windows Api: 打印uri所有信息
    let api_uri = hx.commands.registerCommand('api.uri', () => {
        uri.uri();
    });
    context.subscriptions.push(api_uri);

    // TextEditor Api: TextEditor
    let api_text_editor = hx.commands.registerCommand('api.text_editor', () => {
        textEditor.textEditor("document");
    });
    context.subscriptions.push(api_text_editor);

    // TextEditor Api: TextEditor for line text 获取光标所在行内容
    let api_text_editor_linetext = hx.commands.registerCommand('api.text_editor_linetext', () => {
        textEditor.textEditor("linetext");
    });
    context.subscriptions.push(api_text_editor_linetext);

    // TextEditor Api: 把当前选中的内容由小写转换大写
    let api_text_editor_line_to_upper_case = hx.commands.registerCommand('api.text_editor_line_to_upper_case',() => {
        textEditor.textEditor("UpperCase");
    });
    context.subscriptions.push(api_text_editor_line_to_upper_case);

    // TextEditor Api:获取当前文件tabSize
    let api_text_editor_indent = hx.commands.registerCommand('api.text_editor_indent', () => {
        textEditor.textEditor("tabSize");
    });
    context.subscriptions.push(api_text_editor_indent);

    // TextEditor Api: lineFromPosition 根据光标位置获取光标所在行
    let api_text_lineFromPosition = hx.commands.registerCommand('api.text_lineFromPosition', () => {
        lineFromPosition.lineFromPosition();
    });
    context.subscriptions.push(api_text_lineFromPosition);

    // TextEditor Api: lineFromPosition 根据光标位置获取光标所在行
    let api_text_lineAt = hx.commands.registerCommand('api.text_lineAt', () => {
        lineAt.lineAt();
    });
    context.subscriptions.push(api_text_lineAt);

    // TextEditor Api: getText 获取指定区域内的文本
    let api_text_getText = hx.commands.registerCommand('api.text_getText', () => {
        getText.getText();
    });
    context.subscriptions.push(api_text_getText);

    // setSelection
    let api_set_selection = hx.commands.registerCommand('api.set_selection', () => {
        setSelection.setSelection()
    });
    context.subscriptions.push(api_set_selection);

    // Languages Api: DiagnosticCollection 创建问题集合
    let api_languages_create_diagnostics_collection = hx.commands.registerCommand('api.languages_create_diagnostics_collection', () => {
        DiagnosticCollection.createDiagnosticCollection();
    });
    context.subscriptions.push(api_languages_create_diagnostics_collection);

    // help
    let open_help = hx.commands.registerCommand("api.open_help", () => {
        help.openHelp();
    });
    context.subscriptions.push(open_help);

    // openExternals
    let api_openExternal_url = hx.commands.registerCommand('api.openExternal_url', () => {
        openExternal.openExternal("https://www.baidu.com")
    });
    context.subscriptions.push(api_openExternal_url);

    // openExternals
    let api_openExternal_mail = hx.commands.registerCommand('api.openExternal_mail', () => {
        openExternal.openExternal("mailto:ide@dcloud.io")
    });
    context.subscriptions.push(api_openExternal_mail);

    // clipboard
    let api_clipboard_write = hx.commands.registerCommand('api.clipboard_write', () => {
        clipboard.clipboardWrite();
    });
    context.subscriptions.push(api_clipboard_write);

    // clipboard
    let api_clipboard_read = hx.commands.registerCommand('api.clipboard_read', () => {
        clipboard.clipboardRead();
    });
    context.subscriptions.push(api_clipboard_read);

    // authorize login
    let api_authorize_login = hx.commands.registerCommand('api.authorize_login', () => {
        authorize.login();
    });
    context.subscriptions.push(api_authorize_login);

    // authorize logout
    let api_authorize_logout = hx.commands.registerCommand('api.authorize_logout', () => {
        authorize.logout();
    });
    context.subscriptions.push(api_authorize_logout);

    //Api: treeview
    hx.window.createTreeView("api.treedemo", {
        showCollapseAll: true,
        treeDataProvider: new DemoTreeDataProvider()
    });

    // Api: webview
    let webviewPanel = hx.window.createWebView("api.WebView", {
        enableScritps: true
    });
    showWebView.showWebView(webviewPanel);

    let webviewPanel2 = hx.window.createWebView("api.WebView2", {
        enableScritps: true
    });
    showWebView.showWebView(webviewPanel2);

    // Api: 自定义编辑器 customEditor
    let provider = new CatCustomEditorProvider({
        supportsMultipleEditorsPerDocument: true
    });
    hx.window.registerCustomEditorProvider("catEdit.catScratch", provider);

    let CustomEditorTest = hx.commands.registerCommand('api.CustomEditor', (param) => {
        let f = path.join(__dirname, "api", "customEditor", "test.cscratch");
        hx.workspace.openTextDocument(f);
    });
    context.subscriptions.push(CustomEditorTest);

    // 操作json
    let hjson = hx.commands.registerCommand('api.util_handleJson', () => {
        let rwJson = new handleJson();
        rwJson.main();
    });
    context.subscriptions.push(hjson);
};

//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
    activate,
    deactivate
};
