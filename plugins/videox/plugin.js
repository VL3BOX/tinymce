tinymce.PluginManager.add("videox", function (editor, url) {
    var openDialog = function () {
        return editor.windowManager.open({
            title: "插入视频",
            body: {
                type: "panel",
                items: [
                    {
                        type: "textarea",
                        name: "videox",
                        label: `<a style="margin-bottom: 10px;display: block;color: #0366D6;font-weight: bold;" href="https://www.jx3box.com/help/686/" target="_blank">💙 点击查看如何获取视频地址</a>`,
                    },
                ],
            },
            buttons: [
                {
                    type: "cancel",
                    text: "取消",
                },
                {
                    type: "submit",
                    text: "插入",
                    primary: true,
                },
            ],
            onSubmit: function (api) {
                var data = api.getData();
                // 将输入框内容插入到内容区光标位置
                editor.insertContent(data.videox);
                api.close();
            },
        });
    };

    // 注册一个工具栏按钮名称
    editor.ui.registry.addButton("videox", {
        icon : 'videox',
        tooltip: "插入视频",
        // text: '插入视频',
        onAction: function () {
            openDialog();
        },
    });

    // 注册一个菜单项名称 menu/menubar
    // editor.ui.registry.addMenuItem("videox", {
    //     text: "Example菜单名",
    //     onAction: function () {
    //         openDialog();
    //     },
    // });

    return {
        getMetadata: function () {
            return {
                //插件名和链接会显示在“帮助”→“插件”→“已安装的插件”中
                name: "videox", //插件名称
                url: "https://github.com/JX3BOX", //作者网址
            };
        },
    };
});
