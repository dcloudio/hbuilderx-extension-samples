const hx = require("hbuilderx");
const path = require('path');
const os = require('os');

const osName = os.platform();

async function ui_vue() {
    hx.vue.defineComponent('apiExampleVue', path.resolve(__dirname, "./vue_main.vue"));

    let window_height = 700;
    let subtitle = "这里是子标题";
    subtitle = subtitle + '<a href="https://hx.dcloud.net.cn/"> 帮助文档 </a>'

    let result = await hx.window.showFormDialog({
        title: "Vue示例",
        subtitle: subtitle,
        submitButtonText: "确定(&S)",
        cancelButtonText: "取消(&C)",
        footer: "<a href=\"https://hx.dcloud.net.cn/\">帮助文档</a>",
        width: 600,
        height: window_height,
        showModal: false,
        validate: async function(formData) {
            this.showError("");
            let data = formData.apiExampleVue;
            // console.log(formData);
            const that = this;
            return validate_value(data, that);
        },
        onChanged: function (field, value, formData) {
            // console.log("调用changed函数", value);
        },
        formItems: [{
            "type": "vue:apiExampleVue",
            "name": "apiExampleVue",
            "value": {
                "osName": osName
            },
            event: {
                showMsg(msg) {
                    hx.window.showInformationMessage(msg);
                }
            }
        }]
    }).then((res)=> {
        let last_data = JSON.parse(JSON.stringify(res.uniTest));
        return last_data;
    }).catch( error => {
        return 'error';
    });

    // 处理界面数据
    let data = [];
    return data;
};

/**
 * @description 校验vue窗口填写的数据
 * @param {Object} data
 * @param {Object} that
 */
function validate_value(data, that) {
   let { access, input } = data;
   if (input == "") {
       that.showError("这是错误提示，请在输入框中随意输入内容");
       return;
   };
   return true;
};


module.exports = ui_vue;
