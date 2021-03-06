/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 等宽高适配
 */

import pr from '../data/pr';

const { ccclass, property } = cc._decorator;

@ccclass
export class AdaptiveComm extends cc.Component {
    onLoad() {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
        pr.logUtil.log2('查看节点尺寸width:', this.node.width, 'height', this.node.height)();
    }
}
