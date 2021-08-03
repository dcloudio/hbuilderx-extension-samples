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
    let ListTemplates = {
        javascript: [
            {columns: [{label: "包含jquery的模板"},{"desc":"详情"}]},
            {columns: [{label: "包含vue.js的模板"}]}
        ],
        css: [
            {columns: [{label: "包含less的模板"}]},
            {columns: [{label: "包含stylus的模板"}]}
        ]
    };

    let radioDefaultValue = selected ? selected : "javascript";
    let uiData = {
        formItems: [{
                type: "radioGroup",
                name: "projectType",
                value: radioDefaultValue,
                items: [
                    {label: "css", id: "css"},
                    {label: "javascript", id: "javascript" }
                ]
            },
            {type: "input",name: "projectName",label: "普通输入框",placeholder: '这是一个普通输入框'},
            {type: "file",name: "projectLocation",label: "文件选择输入框",placeholder: '这是一个文件选择输入框'},
            {type: "checkBox",name: "checkBox", value:"复选框",label:"复选框"},
            {
                type: "list",
                title: "UI-列表",
                columnStretchs: [1,2],
                items: ListTemplates[radioDefaultValue],
            },
            {type: "label",text: "备注：演示hx.window.showFormDialog的基本操作"}
        ]
    }
    return uiData;
};


/**
 * @description showFormDialog
 */
async function showFormDialog() {
    // 获取默认UI数据
    let uidata = getUIData("javascript")

    hx.window.showFormDialog({
        ...uidata,
        title: "showFormDialog",
        subtitle: "插件API hx.window.showFormDialog测试用例",
        width: 640,
        height: 480,
        submitButtonText: "提交(&S)",
        cancelButtonText: "取消(&C)",
        validate: function (formData) {
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
