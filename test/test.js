const hx = require('hbuilderx');

const allCommands = [
  "api.commands",
  "api.status_bar_info_message",
  "api.status_bar_warn_message",
  "api.status_bar_error_message",
  "api.status_bar_timeout_message",
  "api.clear_status_bar_message",
  "api.show_error_message",
  "api.show_info_message",
  "api.show_warning_message",
  "api.window_show_quick_pick",
  "api.window_show_input_box",
  "api.get_active_text_editor",
  "api.get_active_text_editor_for_nature",
  "api.get_active_text_editor_for_project_name",
  "api.window_create_output_channel",
  "api.open_text_document",
  "api.on_will_save_text_document",
  "api.on_did_change_text_document",
  "api.on_did_open_text_document",
  "api.workspace_apply_edit",
  "api.workspace_get_configuration",
  "api.workspace_update_configuration",
  "api.workspace_add_configuration",
  "api.get_workspace_folders",
  "api.get_workspace_folder",
  "api.on_did_chanage_configuration",
  "api.on_did_change_forkspace_folders",
  "api.text_editor",
  "api.text_editor_linetext",
  "api.text_editor_line_to_upper_case",
  "api.text_editor_indent",
  "api.text_lineFromPosition",
  "api.text_lineAt",
  "api.text_getText",
  "api.set_selection",
  "api.uri",
  "api.languages_create_diagnostics_collection",
  "open_help",
  "api.openExternal_url",
  "api.openExternal_mail",
  "api.clipboard_write",
  "api.clipboard_read"
]

async function runtest() {
  for (let s of allCommands) {
    let result = await hx.commands.executeCommand("extension." + s);
    console.log("...",s,result);
  }
};

module.exports = {
  runtest
}