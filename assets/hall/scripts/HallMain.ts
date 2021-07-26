/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: Hall入口
 */

import { LayerType } from '../../script/management/LayerBase';
import LoadBase from '../../script/management/LoadBase';
import HallLayerC from './HallLayerC';
import HallLayerV from './HallLayerV';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallMain extends cc.Component {

    @property(HallLayerV)
    hallLayerV: HallLayerV = null;

    async onLoad() {
        let path = `db://assets/config/config1.json`;
        let json = {
            name: "haha",
            age: 18
        }
        HallLayerC.instance.init(this.hallLayerV, {});
        Editor.assetdb.createOrSave(path, JSON.stringify(json), function (err, results) {
            console.log("配置已经更新", err, results);
        });
    }
}

