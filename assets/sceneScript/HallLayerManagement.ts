/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { LayerBase } from '../script/management/LayerBase';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallLayerManagement extends LayerBase {
    private static _instance: HallLayerManagement;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HallLayerManagement();
        }
        return this._instance;
    }
}
