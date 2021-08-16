/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import CarPrefabC from './CarPreafbC';
import CarPrefabV from './CarPrefabV';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export class CarPrefabMain extends cc.Component {

    @property(CarPrefabV)
    carPrefabV: CarPrefabV = null;

    public onLoad() {
        if (CC_EDITOR) {
            CarPrefabC.instance.init(this.carPrefabV, {});
        }
    }
    public init() {
    }
}
