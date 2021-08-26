/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: node初始化基础类
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class NodeInitBase extends cc.Component {
    onLoad() {}
    /**
     * 修改str
     * @param data
     */
    public setStr(nodeLabel: cc.Label, data: string): void {
        nodeLabel.string = data;
    }
    /**
     * 修改怪物图片
     * @param pic
     */
    public setPic(nodes: cc.SpriteFrame, pic: cc.SpriteFrame) {
        nodes = pic;
    }
}
