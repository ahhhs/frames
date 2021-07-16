/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { BaseLayerManagement, LayerType } from '../script/management/BaseLayerManagement';
import LoadManagement from '../script/management/LoadManagement';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    async onLoad() {
        BaseLayerManagement.instance.init(this.node, { height: 750, width: 1334 });
        await LoadManagement.install.loadPrefab("prefabAB", "testPrefab");
        await LoadManagement.install.loadPrefabs("prefabAB", "prefabArr");

        BaseLayerManagement.instance.addNode(LayerType.UI, LoadManagement.install.getLoadList().get("testPrefab"), "TestPrefabUI");
    }
}
