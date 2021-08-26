/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 骰子仓库
 */

import { PopUpBase } from '../../scriptComm/base/PopUpBase';
import { DiceWarehouseC } from './DiceWarehouseC';
import { DiceWarehouseV } from './DiceWarehouseV';

const { ccclass, property } = cc._decorator;

@ccclass
export class DiceWarehouseMain extends PopUpBase {
    @property({ type: DiceWarehouseV, displayName: '视图' })
    DiceWarehouseV: DiceWarehouseV = null;
    onLoad() {
        DiceWarehouseC.instance.init(this.DiceWarehouseV);
    }
    init() {}
}
