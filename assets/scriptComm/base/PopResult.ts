/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 弹窗效果
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class PopResult extends cc.Component {
    onLoad() {
        this.node.scale = 0.6;
        cc.tween(this.node).to(0.2, { scale: 1.1 }).to(0.1, { scale: 1 }).start();
    }
}
