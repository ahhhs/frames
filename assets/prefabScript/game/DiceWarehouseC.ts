/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import pr from '../../scriptComm/data/pr';
import { PrUserData } from '../../scriptComm/data/PrUserData';
import { DiceWarehouseM } from './DiceWarehouseM';
import { DiceWarehouseV } from './DiceWarehouseV';

const { ccclass, property } = cc._decorator;

@ccclass
export class DiceWarehouseC {
    private static _instance: DiceWarehouseC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new DiceWarehouseC();
        }
        return this._instance;
    }
    diceWV: DiceWarehouseV;
    init(v: DiceWarehouseV) {
        this.diceWV = v;

        this.initUserData();
    }
    public initUserData() {
        DiceWarehouseM.instance.addDiceList(PrUserData.UDiceDetails, this.diceWV.getContent());
    }
}
