/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 骰子
 */

import { NodeInitBase } from '../../scriptComm/base/NodeInitBase';
import { CDDiceClassData } from '../../scriptComm/data/PrClassData';

const { ccclass, property } = cc._decorator;

@ccclass
export class DiceDetatils extends NodeInitBase {
    onLoad() {}
    public init(data: CDDiceClassData) {
        this.initData(data);
    }

    private initData(data: CDDiceClassData) {
        let contentValue = this.node.getChildByName('contentValue').children;
        for (let i = 0; i < contentValue.length; i++) {
            let surface = data.getDiceSurface();
            if (surface.hasOwnProperty(contentValue[i].name)) {
                //判断骰子的6个面,和节点上的name是否相等,相等的话,把值赋到上面
                this.setStr(
                    contentValue[i].getComponent(cc.Label),
                    surface[contentValue[i].name] + ''
                );
            }
        }
    }
}
