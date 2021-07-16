/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class CarPrefabV extends cc.Component {

    public init() {
        console.log("init", this.node.width, this.node.height);
    }
}
