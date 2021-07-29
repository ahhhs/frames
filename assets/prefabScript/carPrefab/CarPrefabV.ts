/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class CarPrefabV extends cc.Component {
    private static _instance: CarPrefabV;

    public static get instance() {
        if (!this._instance) {
            this._instance = new CarPrefabV();
        }
        return this._instance;
    }
}
