module.exports = {
    load() {},
    unload() {},
    messages: {
        open() {
            Editor.log('弹窗了');
            Editor.Panel.open('foobar');
        },
        getChild() {
            Editor.Scene.callSceneScript('foobar', 'get-canvas-children', function (err, length) {
                Editor.log('接受到了:', length);
            });
        },
        getScript() {
            Editor.Scene.callSceneScript('foobar', 'inits', function (err, length) {
                Editor.log('引用脚本:', length);
            });
        },
        addScenes() {
            Editor.log('新建场景');
            Editor.Ipc.sendToPanel('foobar', 'foobar:new-scene');
        },
    },
};
