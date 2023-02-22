let hx = require('hbuilderx');

/**
 *@description 窗口控件
支持的控件如下：
    - input 普通输入框
    - file 文件选择输入框
    - radio 单选框
    - list 列表
    - label 描述
 */
function getUIData(selected) {
    let uiData = {
        formItems: [
            {
                type: "label",
                name: "label1",
                text: "这是一个文本展示组件，主要用来放置描述文字，欢迎大家开发HBuilderX插件"
            },
            {
                type: "input",
                name: "projectName",
                label: "普通输入框",
                placeholder: '这是一个普通输入框',
                value: ""
            },
            {
                type: "input",
                name: "projectName",
                label: "普通输入框",
                placeholder: '这是一个普通输入框',
                value: "uni-app",
                disabled: true
            },
            {
                type: "fileSelectInput",
                name: "projectLocation",
                label: "文件选择输入框",
                placeholder: '这是一个文件选择输入框, 只能选择html和json文件',
                value: "",
                mode: "file",
                filters: ["*.html;*.json"]
            },
            {
              type: "comboBox",
              placeholder: "请输入",
              name: "functionNameInput",
              label: "组合下拉框",
              editable: true,
              items: ["item1","item2","item3"],
              text: "item1"
            },
            {
                type: "checkBox",
                name: "checkBox",
                value: "复选框",
                label: "复选框"
            },
            {
                type: "radioGroup",
                name: "projectType",
                label: "单选框",
                value: "css",
                items: [
                    {label: "css",id: "css"},
                    {label: "html",id: "html"},
                    {label: "javascript",id: "javascript"},
                    {label: "typescript",id: "typescript"},
                    {label: "php",id: "php"}
                ]
            },
            {
                type: "textEditor",
                name: "paramsInput",
                title: "标题",
                languageId: "json",
                text: "{\n\"params\":[\n]}",
            },
            {
              "type": "list",
              "title": "选择框",
              "name": "list1",
              "columnStretches": [1, 2],
              "items": [
                {
                  "columns": [
                    {"label": "百度"},
                    {"label": "百度一下<a href='www.baidu.com'>百度</a>"}
                  ]
                },
                {
                  "columns": [
                    {"label": "Google"},
                    {"label": "谷歌一下<a href='www.Google.com'>Google</a>"}
                  ]
                }
              ],
              "value": 0
            }
        ]
    }
    return uiData;
};


/**
 * @description showFormDialog
 */
async function showFormDialog() {
    // 获取默认UI数据
    let uidata = getUIData()

    hx.window.showFormDialog({
        ...uidata,
        title: "showFormDialog",
        subtitle: "插件API hx.window.showFormDialog测试用例",
        width: 640,
        height: 780,
        submitButtonText: "提交(&S)",
        cancelButtonText: "取消(&C)",
        validate: function(formData) {
            if (!formData.projectName) {
                this.showError("普通输入框不能为空，请填写");
                return false;
            };
            return true;
        },
        onChanged: function(field, value) {
            if (field == "projectType") {
                let updateData = getUIData(value);
                this.updateForm(updateData);
            };
        }
    }).then((res) => {
        console.log("返回结果：", JSON.stringify(res));
    });

};

module.exports = showFormDialog;
