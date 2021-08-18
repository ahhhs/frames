/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { HomesC } from './HomesC';
import HomesV from './HomesV';

const { ccclass, property } = cc._decorator;

@ccclass
export class HomesMain extends cc.Component {
    @property(HomesV)
    homesV: HomesV = null;

    onLoad() {
        HomesC.instance.init(this.homesV);
    }
}
