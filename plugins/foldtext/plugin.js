tinymce.PluginManager.add("foldtext", function (editor, url) {

    var insertFoldText = function (){
         var selected_text = editor.selection.getContent();
         let _title = '<pre class="e-summary">折叠头文本</pre>';
         let _body = `<pre class="e-details">被折叠区域文本${selected_text}</pre>`;
         editor.insertContent(_title + _body);
    }
 
     // 注册一个工具栏按钮名称
     editor.ui.registry.addButton("foldtext", {
         icon: "foldtext",
         tooltip: "插入折叠文本",
         // text: '插入视频',
         onAction: function () {
             insertFoldText()
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
                 name: "foldtext", //插件名称
                 url: "https://github.com/JX3BOX", //作者网址
             };
         },
     };
 });
 