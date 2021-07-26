Editor.Panel.extend({
    style: `
    :host { margin: 5px; }
    h2 { color : #f90;}
    `,
    
    template:`
    <h2>标准面板</h2>
    <ui-button id="btn">点击</ui-button>
    <hr />
    <div> 状态: <span id="label">--</span></div>
    <div> 状态: <span id="str">--</span></div>
    `
    ,
    $: {
        btn: '#btn',
        lable: '#label',
        lables:  '#str'
    },
    ready(){
        this.$btn.addEventListener('confirm',()=>{
            this.$lable.innerText = '你好';
            this.$lables.innerText = '嘻嘻';
            setTimeout(()=>{
                this.$lable.innerText = '--';
                this.$lables.innerText = '--';
            },500);
        });
        this.$btn.addEventListener('confirm', () => {
            Editor.Ipc.sendToMain('hello-world:say-hello', this.$lables.innerText);
        });
        
    },
    listeners: {
        mousedown ( event ) {
          event.stopPropagation();
          Editor.log('on mousedown');
        },
        'panel-resize' ( event ) {
          event.stopPropagation();
          Editor.log('on panel resize');
        }
        
    },
    messages: {
        'greeting':function ( event ,question) {
            Editor.log("渲染进程监听到了",question);
            if(event.reply){
                event.reply(null,"fine,thank you!");
            }
        },
    }
});
