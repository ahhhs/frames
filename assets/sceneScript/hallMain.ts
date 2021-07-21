/*
 * Author: ahhh (new_q8@163.com)
 *
 * Description: Hall入口
 */

import { MD5 } from '../script/common/MD5';
import { LayerType } from '../script/management/LayerBase';
import LoadBase from '../script/management/LoadBase';
import HallLayerManagement from './HallLayerManagement';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallMain extends cc.Component {

    async onLoad() {
        HallLayerManagement.instance.init(this.node, { height: 720, width: 1280 });
        await LoadBase.instance.loadPrefab("prefabAB", "carPrefab");
        HallLayerManagement.instance.addNode(LayerType.UI, LoadBase.instance.getLoadList().get("carPrefab"), "CarPrefabV");
    }
}

