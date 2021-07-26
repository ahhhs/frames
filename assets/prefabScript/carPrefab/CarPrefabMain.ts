/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import CarPrefabC from './CarPreafbC';
import CarPrefabV from './CarPrefabV';

const { ccclass, property } = cc._decorator;

@ccclass
export class CarPrefabMain extends cc.Component {

    @property(CarPrefabV)
    carPrefabV: CarPrefabV = null;

    public onLoad() {
        CarPrefabC.instance.init(this.carPrefabV, {});
    }
}
