/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import { BaseLayerManagement } from '../script/management/BaseLayerManagement';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad() {
        BaseLayerManagement.instance.init(this.node, { height: 750, width: 1334 });
        
    }
}
