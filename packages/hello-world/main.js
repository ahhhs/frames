
module.exports = {

    load(){
    },
    unload(){
    },
    messages: {
        'start'(){
            let fs = require('fs');
            let path = require('path');
            fs.mkdirSync(path.join(Editor.Project.path,'myNewFolder'));
            Editor.success("New Folder created!");
        },
        'say-hello' (event,dt) {
            Editor.Ipc.sendToPanel('hello-world', 'greeting', 'How are you?', function (error, answer) {
                Editor.log(answer);
            });
        },
        'demo-nima2' (event){
            Editor.log('demo2');
            Editor.Ipc.sendToPanel("say-hello",'messages',[,...args,callback,timeout])
        },
        'open'(){
            Editor.log("弹窗了");
            Editor.Panel.open('hello-world');
        },
        'demos'(event,question){
            Editor.log("主程序收到监听",question);
        }
    },
}