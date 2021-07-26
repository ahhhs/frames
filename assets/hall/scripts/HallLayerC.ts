/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: 大厅层级基类
 */

import { LayerBase, LayerType } from '../../script/management/LayerBase';
import LoadBase from '../../script/management/LoadBase';
import HallLayerM from './HallLayerM';
import HallLayerV from './HallLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallLayerC extends LayerBase {
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
        this.addNode(LayerType.UI, LoadBase.instance.getLoadList().get("carPrefab"));
    }
    /**
     * 加载资源 
     */
    private async loadResource() {
        await LoadBase.instance.loadPrefab("prefabAB", "carPrefab");
    }
}
