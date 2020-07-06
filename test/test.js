const hx = require('hbuilderx');

const allCommands = [
  "api_commands",
  "api_status_bar_info_message",
  "api_status_bar_warn_message",
  "api_status_bar_error_message",
  "api_status_bar_timeout_message",
  "api_clear_status_bar_message",
  "api_show_error_message",
  "api_show_info_message",
  "api_show_warning_message",
  "api_window_show_quick_pick",
  "api_window_show_input_box",
  "api_get_active_text_editor",
  "api_get_active_text_editor_for_nature",
  "api_get_active_text_editor_for_project_name",
  "api_window_create_output_channel",
  "api_open_text_document",
  "api_on_will_save_text_document",
  "api_on_did_change_text_document",
  "api_on_did_open_text_document",
  "api_workspace_apply_edit",
  "api_workspace_get_configuration",
  "api_workspace_update_configuration",
  "api_workspace_add_configuration",
  "api_get_workspace_folders",
  "api_get_workspace_folder",
  "api_on_did_chanage_configuration",
  "api_on_did_change_forkspace_folders",
  "api_text_editor",
  "api_text_editor_linetext",
  "api_text_editor_line_to_upper_case",
  "api_text_editor_indent",
  "api_text_lineFromPosition",
  "api_text_lineAt",
  "api_text_getText",
  "api_set_selection",
  "api_uri",
  "api_languages_create_diagnostics_collection",
  "open_help",
  "api_openExternal_url",
  "api_openExternal_mail",
  "api_clipboard_write",
  "api_clipboard_read"
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