/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { HomesC } from './HomesC';


const { ccclass, property } = cc._decorator;

@ccclass
export default class HomesV extends cc.Component {

    onLoad() {
        this.node.getChildByName("startGame").on("click", this.onStartGame, this);
        this.node.getChildByName("shop").on("click", this.onShop, this);
    }
    /**
     * 监听开始游戏
     */
    public onStartGame() {

    }
    /**
     * 监听商店
     */
    public onShop() {
        HomesC.instance.clickShop();
    }
}
