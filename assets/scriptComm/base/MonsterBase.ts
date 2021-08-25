/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description: 怪物基类
 */

import pr from '../data/pr';
import { LayerType } from '../util/PrLayerUtil';

const { ccclass, property } = cc._decorator;
@ccclass
export class MonsterBase extends cc.Component {
    @property({ type: cc.Sprite, displayName: '怪物图片' })
    MonsterPic: cc.Sprite = null;

    @property({ type: cc.Animation, displayName: '动作' })
    animation: cc.Animation = null;

    MonsterM = new pr.layerUtil();
    /**
     * 长按回调
     */
    isPressFunc: Function = () => {
        pr.event.fire('isPress');
    };
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        pr.event.register('isPress', this.showMonsterData, this);
    }
    /**
     * 触摸开始
     */
    public touchStart() {
        this.scheduleOnce(this.isPressFunc, 0.5);
    }
    /**
     * 触摸结束
     */
    public touchEnd() {
        this.unschedule(this.isPressFunc);
    }
    /**
     * 显示角色信息
     */
    public showMonsterData() {
        this.MonsterM.addNodeMain(LayerType.POPUP, 'prefabAB/baseAB', 'detailsData');
    }
    /**
     * 播放动画
     * @param musicFuc 音效
     * @param cb 结束回调
     */
    public playAnimation(musicFuc: Function, cb: Function) {
        this.animation.play();
        musicFuc && musicFuc();
        this.animation.on('stop', () => {
            cb && cb();
        });
    }
    /**
     * 删除怪物
     */
    public deleteMonster(cb: Function) {
        cb && cb();
        this.node.destroy();
    }
}
