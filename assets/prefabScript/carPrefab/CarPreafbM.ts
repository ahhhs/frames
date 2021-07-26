/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class CarPrefabM {
    private static _instance: CarPrefabM;

    public static get instance() {
        if (!this._instance) {
            this._instance = new CarPrefabM;
        }
        return this._instance;
    }
}
