/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 
 */

import Pr from '../../script/data/Pr';
import { LayerType } from '../../script/util/PrLayerUtil';
import HomeLayerV from './HomeLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HomeLayerM extends Pr.layerUtil {

    private static _instance: HomeLayerM;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HomeLayerM();
        }
        return this._instance;
    }

    nodeV: HomeLayerV;

    public async init(V: HomeLayerV) {
        this.nodeV = V;
        this.initLayerBase(this.nodeV.node);
        this.addNodeMain(LayerType.UI,"prefabAB/homeAB", "gameMain");
    }
}
