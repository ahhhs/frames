/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { LayerManagement, LayerType } from '../script/management/LayerManagement';
import LoadManagement from '../script/management/LoadManagement';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallMain extends cc.Component {

    async onLoad() {

        LayerManagement.instance.init(this.node, { height: 720, width: 1280 });
        await LoadManagement.install.loadPrefab("prefabAB", "carPrefab");
        LayerManagement.instance.addNode(LayerType.UI, LoadManagement.install.getLoadList().get("carPrefab"), "CarPrefabV");
    }
}
