/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 首页c
 */

import Pr from '../../script/data/Pr';
import HomeLayerM from './HomeLayerM';
import HomeLayerV from './HomeLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HomeLayerC {
    private static _instance: HomeLayerC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HomeLayerC();
        }
        return this._instance;
    }

    private homeLayerV: HomeLayerV;
    private homeLayerM: HomeLayerM = HomeLayerM.instance;

    /**
     * 初始化控制器
     * @param v 表现层
     * @param m 模型
     */
    public async init(v: HomeLayerV) {
        this.homeLayerV = v;
        this.homeLayerM.init(this.homeLayerV);
    }
   
}
