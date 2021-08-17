import PrData from '../../script/data/PrData';
import CarPrefabM from './CarPreafbM';
import CarPrefabV from './CarPrefabV';

/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: CarC
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class CarPrefabC extends PrData.layer {
    private static _instance: CarPrefabC;

    public static get instance() {
        if (!this._instance) {
            this._instance = new CarPrefabC;
        }
        return this._instance;
    }

    private CarPrefabV: CarPrefabV = null;
    private CarPrefabM: CarPrefabM = null;

    public init(v: CarPrefabV, m: CarPrefabM) {
        this.CarPrefabV = v;
        this.CarPrefabM = m;
        this.initLayerBase(this.CarPrefabV.node, false);
        this.main();
    }

    public main() {
        // console.log("遍历根节点:", this.getAllNodeData());
    }
}
