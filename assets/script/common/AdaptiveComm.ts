/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 适配脚本
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class AdaptiveComm extends cc.Component {

    onLoad() {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
    }
}

