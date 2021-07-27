module.exports = {
    main: function (event, question) {
        Editor.log('输出输出输出:');
        if (event.reply) {
            event.reply(null, '成功输出');
        }
    },
};
