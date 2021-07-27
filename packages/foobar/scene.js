module.exports = {
    'get-canvas-children': (event) => {
        var canvas = cc.find('Canvas');
        Editor.log('输出', event.reply, canvas.children.length);
        if (event.reply) {
            event.reply(null, canvas.children.length);
        }
    },
    inits: (event) => {
        var myModule = require('./MyModule');
        myModule.main();
    },
    'foobar:new-scene': () => {
        Editor.log('新建场景成功');
    },
};
