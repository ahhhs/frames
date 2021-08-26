/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { CDMonsterClassData } from '../../scriptComm/data/PrClassData';

const { ccclass, property } = cc._decorator;

@ccclass
export class DiceWarehouseM {
    private static _instance: DiceWarehouseM;

    public static get instance() {
        return this._instance;
    }

    public addDiceList(data: Array<CDMonsterClassData>, content: cc.Node) {
        for (let i = 0; i < data.length; i++) {}
    }
}
