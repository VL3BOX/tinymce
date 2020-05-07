```vue
<template>
    <div class="c-editor-tinymce">
        <el-alert class="u-tutorial" type="warning" show-icon
            >进入特殊区域（代码块，折叠块等等）脱离或使用工具栏触发后，请使用键盘方向 → ↓ 键进行脱离，回车只是正常在区块内换行。<a
                href="https://www.jx3box.com/help/219/"
                target="_blank"
                >更多帮助</a
            >
        </el-alert>
        <editor
            id="tinymce"
            v-model="data"
            :init="init"
            class="c-tinymce"
            placeholder="✔ 图片可直接拖拽至编辑器内自动上传 ✔ 支持word/excel一键粘贴"
        />
    </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
const {JX3BOX} = require('@jx3box/jx3box-common');
const API = JX3BOX.__server + "publish/upload/tinymce"
// const API = "http://localhost:5160/" + "publish/upload/tinymce";

export default {
    name: "tinymce",
    props: ["content"],
    data: function() {
        return {
            data: this.content,
            init: {
                // 选择器
                selector: "#tinymce",

                // 语言
                language: "zh_CN",

                // 样式
                // content_css: `./css/article.css`, //TODO:编辑前后内容样式
                content_css: `http://localhost:1024/article.css`,
                body_class: "c-article",
                height: 800,

                // UI
                icons: "custom",
                menubar: false,
                branding: false,
                contextmenu: "",
                plugins: [
                    "link anchor autolink",
                    "hr lists advlist table codesample checklist foldtext ",
                    "image emoticons media videox",
                    "autosave code fullscreen wordcount pagebreak powerpaste template",
                ],
                toolbar: [
                    "undo | formatselect | fontsizeselect | forecolor backcolor | bold italic underline strikethrough superscript subscript | link unlink anchor | restoredraft code fullscreen",
                    "removeformat | hr alignleft aligncenter alignright alignjustify indent outdent | bullist numlist checklist table blockquote foldtext codesample | emoticons image media videox template pagebreak ",
                ],
                mobile: {
                    toolbar_drawer: true,
                    plugins: [
                        "hr lists advlist table emoticons autosave autolink pagebreak fullscreen",
                    ],
                    toolbar: [
                        "undo bold emoticons forecolor backcolor pagebreak restoredraft fullscreen",
                        "hr alignleft aligncenter alignright alignjustify indent outdent bullist numlist table blockquote",
                    ],
                },
                block_formats:
                    "段落=p;一级标题=h1;二级标题=h2;三级标题=h3;四级标题=h4;五级标题=h5;六级标题=h6;",
                fontsize_formats:
                    "12px 14px 16px 18px 22px 24px 26px 28px 32px 48px 72px",
                color_map: [
                    "FF99CC",
                    "浅粉",
                    "FF3399",
                    "深粉",
                    "FF0000",
                    "正红",
                    "CC99FF",
                    "紫色",
                    "9933ff",
                    "深紫",

                    "FFFF99",
                    "浅黄",
                    "FFFF00",
                    "金黄",
                    "FFCC00",
                    "亮黄",
                    "FFCC99",
                    "浅桃",
                    "FF6600",
                    "橘色",

                    "CCFFCC",
                    "浅绿",
                    "9bf915",
                    "荧光绿",
                    "00FF00",
                    "辣眼绿",
                    "49c10f",
                    "深绿",
                    "008080",
                    "深青",

                    "CCFFFF",
                    "浅蓝",
                    "00FFFF",
                    "参考线",
                    "00CCFF",
                    "天蓝",
                    "99CCFF",
                    "蔚蓝",
                    "0000FF",
                    "辣眼蓝",

                    "CC0000",
                    "深红",
                    "000000",
                    "黑色",
                ],

                // Image
                image_advtab: true,
                // paste_data_images: true,
                file_picker_types: "file image",
                images_upload_url: API,
                automatic_uploads: true,
                images_upload_credentials: true,

                // Hook
                setup: this.setup,
                init_instance_callback: this.ready,

                // Template
                // TODO:量太大，容我缓缓
                templates: [
                    {
                        title: "剑三宏",
                        description: "",
                        content: `
                            <pre class="e-jx3macro-area w-jx3macro">/cast 自绝经脉</pre>
                        `,
                    },
                    // {
                    //     title: "奇穴方案",
                    //     description: "",
                    //     url: "My content",
                    // },
                ],
            },
        };
    },
    watch: {
        data(val) {
            this.$store.commit('editContent',val)
        },
    },
    computed: {},
    methods: {
        setup: function(editor) {
            console.log("ID为: " + editor.id + " 的编辑器即将初始化.");
        },
        ready: function(editor) {
            console.log("ID为: " + editor.id + " 的编辑器已初始化完成.");
        },
    },
    mounted: function() {},
    components: {
        Editor,
    },
};
</script>

<style lang="less">
.c-editor-tinymce {
    .u-tutorial {
        .mb(10px);
        .fz(13px);
        padding: 8px 6px;
        .el-alert__description {
            .mt(0);
        }
        .el-alert__icon.is-big {
            .fz(18px);
        }
        .el-alert__content {
            padding-left: 0;
        }
        .el-alert__closebtn {
            top: 12px;
        }
    }
}

@media screen and (max-width:@phone){
    .c-editor-tinymce{
        .u-tutorial{
            .none;
        }
    }
}
</style>

```