/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 等宽高适配
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class AdaptiveUtil extends cc.Component {

    init() {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
    }
}

