/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 首页v
 */

import { HomesC } from '../../prefabScript/game/HomesC';
import pr from '../../scriptComm/data/pr';
import { EventUserType } from '../../scriptComm/data/PrEnum';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export class HomeLayerV extends cc.Component {
    onLoad() {
        pr.event.register(
            EventUserType.StartGanme[EventUserType.StartGanme],
            this.onStartGame,
            this
        );
        pr.event.register(EventUserType.Shop[EventUserType.Shop], this.onShop, this);
    }
    /**
     * 点击开始游戏
     */
    public onStartGame() {}
    /**
     * 点击商店
     */
    public onShop() {}
}
