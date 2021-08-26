/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import pr from '../../scriptComm/data/pr';
import { LayerType } from '../../scriptComm/util/PrLayerUtil';
import { HomeLayerV } from './HomeLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HomeLayerM {
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
        pr.layerUtil.initLayerBase(this.nodeV.node);
        pr.layerUtil.addNodeMain(LayerType.UI, 'prefabAB/homeAB', 'homesMain');
    }
}
