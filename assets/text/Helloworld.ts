/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */

import ABCCtl from './ABCCtl';
import ABCView from './ABCView';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(ABCView)
    public eView: ABCView = null;

    public onLoad() {
        ABCCtl.getInstace().init({ name: "zhangs", age: 1 }, this.eView);
    }
}
