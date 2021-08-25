/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import pr from '../../scriptComm/data/pr';
import { LayerType } from '../../scriptComm/util/PrLayerUtil';
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
    private homesM: HomesM = HomesM.instance;

    public init(V) {
        this.homesV = V;
        this.homesM.init(this.homesV);
    }
    /**
     * 开始游戏
     */
    public startGame() {
        // this.homesM.addNodeMain(LayerType.POPUP,"")
    }
    /**
     * 商店
     */
    public clickShop() {
        // this.homesM.addNodeMain(
        //     LayerType.POPUP,
        //     'prefabAB/baseAB',
        //     'popUp',
        //     false,
        //     this.homesV.node
        // );
    }
    /**
     * 点击骰子库
     */
    public clickDiceWarehouse() {
        pr.logUtil.log('点击了骰子库')();
    }
}
