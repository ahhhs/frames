/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { GameC } from './GameC';
import GameV from './GameV';

const { ccclass, property } = cc._decorator;

@ccclass
export class gameMain extends cc.Component {
    @property(GameV)
    gameV: GameV = null;

    onLoad() {
        GameC.instance.init(this.gameV);
    }
}
