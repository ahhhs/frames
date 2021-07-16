/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class AdaptiveComm extends cc.Component {

    onLoad() {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
    }
}

