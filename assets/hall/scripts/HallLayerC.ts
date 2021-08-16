/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 
 */


import { LayerType, PrLayerManager } from '../../script/manager/PrLayerManager';
import PrLoadResouceManager from '../../script/manager/PrLoadResourceManager';
import HallLayerM from './HallLayerM';
import HallLayerV from './HallLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallLayerC extends PrLayerManager {
    private static _instance: HallLayerC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new HallLayerC();
        }
        return this._instance;
    }

    private hallLayerV: HallLayerV = null;
    private hallLayerM: HallLayerM = null;

    public async init(v: HallLayerV, m: HallLayerM) {
        this.hallLayerV = v;
        this.hallLayerM = m;
        this.initLayerBase(this.hallLayerV.node);
        await this.loadResource();
        await this.addNode(LayerType.UI, PrLoadResouceManager.instance.getLoadList().get("carPrefab"));
    }
    /**
     * 加载资源 
     */
    private async loadResource() {
        await PrLoadResouceManager.instance.loadPrefab("prefabAB", "carPrefab");
    }
}
