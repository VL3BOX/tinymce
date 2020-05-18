# TinyMCE

```html
<script src="https://cdn.jsdelivr.net/gh/JX3BOX/tinymce@0.1.2/tinymce.min.js"></script>
<script src="https://console.cnyixun.com/static/tinymce/tinymce.min.js?v=xx"></script>
```

需手动更新cdn
npm run build更新css

+ 基于tinymce v5.2.2扩展
+ 保留v4版本分割线规则
+ 内置powerpaste&&checklist插件
+ 增加插入B站视频插件
+ 增加插入折叠文本插件


## 插件添加步骤
1. icons/custom/icons.js 添加svg图标,需设置尺寸,注意视口大小,移除换行符等
2. plugins目录，复制videox目录作为参考新建插件目录
3. 替换videox为新插件名
4. 编辑器配置中激活插件和工具栏