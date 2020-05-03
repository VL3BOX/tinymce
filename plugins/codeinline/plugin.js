tinymce.PluginManager.add("codeinline", function (editor, url) {
    var insertCodeInline = function () {
        var selected_text = editor.selection.getContent();
        let _body = `<code>${selected_text}</code>`;
        editor.insertContent(_body);
    };

    // 注册一个工具栏按钮名称
    editor.ui.registry.addButton("codeinline", {
        icon: "codeinline",
        tooltip: "插入行内代码",
        // text: '插入视频',
        onAction: function () {
            insertCodeInline();
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
                name: "codeinline", //插件名称
                url: "https://github.com/JX3BOX", //作者网址
            };
        },
    };
});
