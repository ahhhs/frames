/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 骰子
 */

import NodeInitBase from '../../scriptComm/base/NodeInitBase';
import Pr from '../../scriptComm/data/Pr';
import { DiceAreaClassData, DiceClassData } from '../../scriptComm/data/PrClassData';

const { ccclass, property } = cc._decorator;

@ccclass
export class DiceDetatils extends NodeInitBase {
    onLoad() {}
    public init(data: DiceClassData) {
        this.initData(data);
    }

    private initData(data: DiceClassData) {
        let contentValue = this.node.getChildByName('contentValue').children;
        for (let i = 0; i < contentValue.length; i++) {
            let surface = data.getDiceSurface();
            if (surface.hasOwnProperty(contentValue[i].name)) {
                this.setStr(
                    contentValue[i].getComponent(cc.Label),
                    surface[contentValue[i].name] + ''
                );
            }
        }
    }
}
