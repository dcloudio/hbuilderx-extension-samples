<template>
    <q-scroll-view layout='vbox' id="scrollView">

        <q-view layout="hbox" layout-spacing="10">
            <q-label text="hbox横向布局（无填充）&nbsp;&nbsp;&nbsp;"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-label text="" id="textBg"></q-label>
        </q-view>

        <q-view layout="hbox" layout-spacing="10">
            <q-label text="hbox横向布局（横向填充）"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <q-view layout="vbox" layout-spacing="10">
            <q-label text="纵向布局"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-label text="" id="textBg"></q-label>
            <q-label text="" id="textBg"></q-label>
        </q-view>

        <q-view layout='hbox'>
            <q-input :text='input' id="elInputS" accessibleName="repos_owner" @textChanged="el_set" placeholderText="这是输入框 (无任何样式) ......"> </q-input>
        </q-view>

        <q-view layout="hbox">
            <q-button id="elBtn" text="我是按钮，点击我试试" @clicked="showDate"></q-button>
            <q-label :text="currentDate" id="labelView"></q-label>
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <q-view layout="hbox" style="margin-top: 6px;">
            <q-label text="combox示例" id="labelView"></q-label>
            <q-combox
                :items='cacheList'
                :currentIndex='cacheIndex'
                :currentText='cacheName'
                :stretch-factor='1'
                accessibleName="combox"
                placeholderText="combox placeholder ......"
                @currentTextChanged="el_set"
                ></q-combox>
            <q-view horizontal-size-policy="ShrinkFlag"></q-view>
        </q-view>

        <q-view layout='hbox'>
            <q-label text="单选框" id="labelView"></q-label>
            <q-radio-group layout="hbox" layout-spacing='5'>
                <q-radio id="elRadio" text="男" :checked="radioValue == '男'" @clicked="el_set()" data-value="男" />
                <q-radio id="elRadio" text="女" :checked="radioValue == '女'" @clicked="el_set()" data-value="女" />
            </q-radio-group>
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <!-- 复选框 -->
        <q-view layout='hbox'>
            <q-label text="复选框: " id="labelView"></q-label>
            <q-checkbox id="elCheckBox" text="Python" :checked='Python' accessibleName="Python" @clicked="el_set" />
            <q-checkbox id="elCheckBox" text="Node" :checked='Node' accessibleName="Node" @clicked="el_set" />
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <q-view layout='vbox'>
            <q-view layout='hbox'>
                <q-label text="前端框架列表"></q-label>
                <q-label id="remark" :text="' 已选'+ selected_list.length +'个 '"></q-label>
                <q-view layout='hbox' layout-spacing="0">
                    <q-button id="searchIcon" text=""></q-button>>
                    <q-input :text='search_word' @textChanged="el_set"
                        id="elInput"
                        accessibleName="search_word"
                        placeholderText="输入关键字......"
                    ></q-input>
                </q-view>
                <q-button id="refreshBtn" text="刷新" @clicked="refresh_data()"></q-button>
            </q-view>
            <q-list-view id="QListView" :minimumHeight = "50">
                <q-list-item layout='hbox' v-for="item in filter_js_framework_list">
                    <q-checkbox id='elCBoxItem' :text="item"
                        :checked='selected_list.includes(item)'
                        accessibleName="framework"
                        :data-value="item"
                        @clicked="el_set"
                        v-show="item"
                    />
                </q-list-item>
            </q-list-view>
        </q-view>

        <q-source-editor id="license-editor" languageId="markdown" :text="licenseText" :read-only="true"
            maximum-height="320" :follow-theme="true" :word-wrap="true" :margin-fold-visible="false"
            :line-number-visible="false" end-at-last-line="true"></q-source-editor>

        <!-- vertical-size-policy 垂直填充 -->
        <q-view vertical-size-policy="Expanding"></q-view>

    </q-scroll-view>
</template>

<script>

    let {
        getCurrentDate
    } = require('./utils.js');

    export default {
        data() {
            return {
                osName: "",
                input: '',
                radioValue: "男",
                Python: false,
                Node: false,
                search_word: "",
                js_framework_list: [
                    "Vue.js",
                    "Next.js",
                    "Nuxt.js"
                ],
                selected_list: [],

                cacheList: ["Python", "Java", "JavaScript", "NodeJs"],
                cacheIndex: -1,
                cacheName: "",

                licenseText: "q-source-editor example",

                currentDate: ""
            }
        },

        computed: {
            filter_js_framework_list() {
                const word = this.search_word.toLocaleLowerCase();
                if (word.trim() == "") return this.js_framework_list;
                let tmp = this.js_framework_list.filter(item=> item.toLocaleLowerCase().includes(word));
                return tmp;
            }
        },

        created() {
            this.test();
        },

        methods: {
            async test() {
                this.updateUi();
            },
            removeElementUsingFilter(arr, value) {
                return arr.filter(function(element) {
                    return element !== value;
                });
            },
            el_set(e) {
                const accessibleName = e.target.accessibleName;
                const data_value = e.target["data-value"];
                const checked = e.target.checked;
                console.log("[el_set] -->", e, checked, accessibleName, data_value);

                const checkboxList = [ "Python", "Node"];
                if (checkboxList.includes(accessibleName)) {
                    this[accessibleName] = e.target.checked;
                };
                if (accessibleName == "framework") {
                    let tmp = [...this.selected_list];
                    tmp.push(data_value);
                    this.selected_list = Array.from(new Set(tmp));;
                };
                if (accessibleName == "search_word") {
                    this.search_word = e.target.text;
                };
                this.updateUi();
            },

            async refresh_data() {
                this.updateUi();
            },

            async showDate() {
                this.currentDate = getCurrentDate();
                this.updateUi();
            }
        },
    }
</script>

<style>
    * {
        background: transparent;
    }

    #textBg {
        height: 20px;
        width: 30px;
        color: #fff;
        padding: 0 3px;
        background-color: rgb(84, 174, 108);
    }

    #scrollView {
        width: 100%;
        justify-content: start;
        border: none;
    }

    #labelView {
        min-width: 50px;
        text-align: right;
    }
    #remark {
        color: rgb(64, 94, 66);
        font-size: 12px;
    }

    #refreshBtn {
        /* padding: 5px 10px; */
        /* padding-bottom: 3px; */
        font-size: 12px;
        color: rgb(84, 174, 108);
        border-radius: 5px;
        width: 50px;
        margin-right: 5px;
    }

    #elRadio::indicator::unchecked {
        image: url(:/hxui/resource/rdbt.png);
    }

    #elRadio::indicator::unchecked:hover {
        image: url(:/hxui/resource/rdbt-hover.png);
    }

    #elRadio::indicator::checked {
        image: url(:/hxui/resource/rdbt-checked.png);
    }

    #refreshBtn:pressed {
        color: #43C45B;
        border: 1px solid #43C45B;
        transform: scale(0.95);
    }

    #elCBoxItem {
        font-size: 12px;
    }

    #elCBoxItem::indicator::unchecked {
        image: url(:/hxui/resource/chbx.png);
    }

    #elCBoxItem::indicator::checked {
        image: url(:/hxui/resource/chbx-checked.png);
    }

    #elCheckBox {
        min-width: 90px;
    }

    #elCheckBox::indicator::unchecked {
        image: url(:/hxui/resource/chbx.png);
    }

    #elCheckBox::indicator::checked {
        image: url(:/hxui/resource/chbx-checked.png);
    }

    #QListView {
        background: rgb(247, 246, 242);
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        height: 120px;
        padding: 10px 5px;
        margin: 0 5px;
    }

    #QListView::item {
        padding: 5px;
    }

    #QListView::item:selected,
    #list::item:hover {
        background-color: transparent;
    }

    #searchIcon {
        min-width: 11px;
        max-width: 11px;
        padding-top: 2px;
        margin-right: 5px;
        /* height: 12px; */
        image: url(":/projectwizard/resource/search@2x.png");
        /* image: url("/Users/hx/DCloud/hbuilderx-for-uniapp-test/src/static/search.png") */
        /* image: url("../static/search.png") */
    }

    #elBtn {
        min-width: 70px;
        font-size: 12px;
        color: #fff;
        border: 1px solid rgb(84, 174, 108);
        background: rgb(84, 174, 108);
        border-radius: 5px;
    }

    #elInputS {

    }

    #elInput {
        border: none;
        /* height: 30px; */
        /* border-bottom: 1px solid #d6d6d6; */
        outline: none;
        font-size: 12px;
        padding-top: 5px;
    }

    #elInput:focus {
        background: transparent;
        color: #0D9E4D;
        /* border-color: #43c45b; */
    }

    QComboBox {
        height: 30px;
        background: #FFFEFA;
        border: none;
        border-bottom: 1px solid #d6d6d6;
        outline: none;
    }

    QComboBox:hover,
    QComboBox:focus {
        border-bottom: 1px solid #43C45B;
    }

    QComboBox::down-arrow {
        image: url(:/login/icons/down-arrow-fill.png);
    }

    QComboBox::drop-down {
        subcontrol-position: top right;
        width: 32px;
        border: none;
    }

    QComboBox QAbstractItemView {
        background: #FFFEFA;
        color: #405E42;
        selection-color: #405E42;
    }

    QComboBox QAbstractItemView::item {
        min-height: 26px;
        background: #FFFEFA;
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }

    QComboBox QAbstractItemView::item:hover,
    QComboBox QAbstractItemView::item:selected {
        background: #FAFFFA;
    }
</style>
