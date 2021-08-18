/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 怪物详情
 */

import { PopUpBase } from '../../scriptComm/base/PopUpBase';
import Pr from '../../scriptComm/data/Pr';

const { ccclass, property } = cc._decorator;

@ccclass
export default class MonsterDetails extends PopUpBase {

    @property({ type: cc.Sprite, displayName: "怪物立绘" })
    private monsterPic: cc.Sprite = null;

    @property({ type: cc.Label, displayName: "血量" })
    private hpStr: cc.Label = null;

    onLoad() {
        super.onLoad();
        Pr.logUtil.log1(this.node)();
    }
    /**
     * 初始化
     */
    public init(data) {

    }
    /**
     * 修改血量
     * @param data 
     */
    private setHp(data: string): void {
        this.hpStr.string = "";
    }
    /**
     * 修改怪物图片
     * @param pic 
     */
    private setMonsterPic(pic: cc.SpriteFrame) {
        this.monsterPic.spriteFrame = pic;
    }
}
