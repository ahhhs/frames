/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import pr from '../../scriptComm/data/pr';
import { LayerType } from '../../scriptComm/util/PrLayerUtil';
import { DiceWarehouseMain } from './DiceWarehouseMain';
import HomesM from './HomesM';
import { HomesV } from './HomesV';

export class HomesC {
    private static _instance: HomesC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HomesC();
        }
        return this._instance;
    }

    private homesV: HomesV;

    public init(V) {
        this.homesV = V;
        HomesM.instance.init(this.homesV);
    }
    /**
     * 开始游戏
     */
    public startGame() {}

    /**
     * 点击骰子库
     */
    public clickDiceWarehouse() {
        pr.logUtil.log1('点击了骰子库')();
        pr.layerUtil.addNodeMain(
            LayerType.POPUP,
            'prefabAB/homeAB/',
            'diceWarehouse'
            // true,
            // null,
            // (node: cc.Node) => {
            //     node.getComponent(DiceWarehouseMain).init();
            // }
        );
    }
}
