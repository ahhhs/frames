/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import Pr from '../../script/data/Pr';
import GameV from './GameV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameM extends Pr.layerUtil {
    private static _instance: GameM;
    private nodeV: GameV = null;

    public static get instance() {
        if (!this._instance) {
            this._instance = new GameM;
        }
        return this._instance;
    }
    public init(V: GameV) {
        // this.getRootNode();
        this.nodeV = V;
        this.initLayerBase(this.nodeV.node, false)
    }
}
