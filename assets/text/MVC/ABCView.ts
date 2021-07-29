/*
 * Copyright (C) 2021, Flickering Inc. All rights reserved.
 * Author: wenqianqin (wenqianqin@flickering.ai)
 *
 * Description:
 */
import ABCCtl, { IAbcCtlDelegate } from './ABCCtl';

const { ccclass, property } = cc._decorator;

@ccclass
export default class ABCView extends cc.Component implements IAbcCtlDelegate {

    @property(cc.Node)
    demo: cc.Node = null;

    public onClickSummit() {
        ABCCtl.getInstace().summit();
    }

    onSubmitResult(): void {
        
    }
}
