/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class DiceWarehouseV extends cc.Component {
    @property({ type: cc.Node, displayName: '骰子库容器' })
    content: cc.Node = null;

    public getContent() {
        return this.content;
    }
}
