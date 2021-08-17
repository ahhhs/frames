/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { LayerType } from '../../script/util/PrLayerUtil';
import GameM from './GameM';
import GameV from './GameV';

export class GameC {
    private static _instance: GameC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new GameC;
        }
        return this._instance;
    }

    private gameV: GameV;
    private gameM: GameM = GameM.instance;

    public init(V) {
        this.gameV = V;
        this.gameM.init(this.gameV);
    }
    /**
    * 开始游戏
    */
    public startGame() {

    }
    /**
     * 商店
     */
    public clickShop() {
        this.gameM.addNodeMain(LayerType.POPUP, "prefabAB/homeAB", "popUpNode", false, this.gameV.node);
    }
}
