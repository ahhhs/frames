/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 首页c
 */

import PrData from '../../script/data/PrData';
import { LayerType, PrLayerUtil } from '../../script/util/PrLayerUtil';
import HallLayerM from './HallLayerM';
import HallLayerV from './HallLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallLayerC extends PrLayerUtil {
    private static _instance: HallLayerC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HallLayerC();
        }
        return this._instance;
    }

    private hallLayerV: HallLayerV = null;
    private hallLayerM: HallLayerM = null;

    /**
     * 初始化控制器
     * @param v 表现层
     * @param m 模型
     */
    public async init(v: HallLayerV, m: HallLayerM) {
        this.hallLayerV = v;
        this.hallLayerM = m;
        this.initLayerBase(this.hallLayerV.node);
        await this.loadResource();
        await this.addNode(LayerType.UI, PrData.loadPresource.getLoadList().get("carPrefab"));
    }
    /**
     * 加载资源 
     */
    private async loadResource() {
        await PrData.loadPresource.loadPrefab("prefabAB", "carPrefab");
    }
}
