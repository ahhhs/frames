/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 首页c
 */

import pr from '../../scriptComm/data/pr';
import { LayerType } from '../../scriptComm/util/PrLayerUtil';
import HomeLayerM from './HomeLayerM';
import { HomeLayerV } from './HomeLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export class HomeLayerC {
    private static _instance: HomeLayerC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HomeLayerC();
        }
        return this._instance;
    }
    /**
     * 初始化控制器
     * @param v 表现层
     * @param m 模型
     */
    public async init(v: HomeLayerV) {
        await HomeLayerM.instance.init(v);
    }
}
