/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import pr from '../../scriptComm/data/pr';
import { HomesV } from './HomesV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HomesM {
    private static _instance: HomesM;
    private nodeV: HomesV = null;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HomesM();
        }
        return this._instance;
    }
    public init(V: HomesV) {
        this.nodeV = V;
        pr.layerUtil.initLayerBase(this.nodeV.node, false);
    }
}
